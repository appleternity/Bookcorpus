import json
import joblib
import os
import matplotlib
import matplotlib.pyplot as plt
import numpy as np
from nltk.corpus import framenet as fn
#from wordcloud import WordCloud
from pprint import pprint
import pandas as pd
import re
from pymongo import MongoClient
import random

root_dir = "/home/appleternity/workspace/lab/Crowd/bookcorpus"

def tokenizer(x):
    return x.split(" ")

def load_fiction_info():

    with open("clean_split.json", 'r', encoding='utf-8') as infile:
        data = json.load(infile)

    book_list = []
    for key in ["train", "valid", "test"]:
        book_list.extend(data[key])

    return book_list

def load_tfidf_model(block=20):
    return joblib.load(os.path.join(root_dir, "model", "tfidf_model", "block_{}.joblib".format(block)))

def get_frame_dictionary():
    frame_dict = {
        f["name"]:f
        for i, f in enumerate(fn.frames())
    }
    return frame_dict

def draw_representation():
    block = 20

    with open(os.path.join(root_dir, "frame", "119427__the-new-girl.txt"), 'r', encoding='utf-8') as infile:
        book = json.load(infile)
        book = book[5:2185]

    model = load_tfidf_model(block=block)
    frame_info_dict = get_frame_dictionary()
    frame_dict = {v:frame_info_dict[k] for k, v in model.vocabulary.items()}

    # generate tfidf vector 
    content = []
    sentence = []
    lu_map = []
    for start in range(0, len(book), block):
        story_start, story_end = start, start+block

        if story_end > len(book):
            continue

        story_frames = " ".join([
            frame["Frame"]
            for sent in book[story_start:story_end]
                for frame in sent["frame"]
        ])
        content.append(story_frames)
        sentence.append("\n".join(sent["text"] for sent in book[story_start:story_end]))
        
        lu = {}
        for sent in book[story_start:story_end]:
            for frame in sent["frame"]:
                if frame["Frame"] not in lu:
                    lu[frame["Frame"]] = []
                lu[frame["Frame"]].append(frame["LU"])
        lu_map.append(lu)

    if content:
        vectors = model.transform(content)
        vectors = vectors.toarray()

    # save data
    print(vectors)
    table = []
    data = []
    sorted_index = np.argsort(vectors, axis=1)[:, ::-1]
    for count, index in enumerate(sorted_index[:]):
        c = content[count]
        s = sentence[count]
        lu = lu_map[count]
        tfidf_value = vectors[count, :]
       
        best_ten_index = index[:30]
        best_ten_frame_tfidf = tfidf_value[best_ten_index]
        best_ten_frame = [frame_dict[int(b)]["name"] for b in best_ten_index]

        print("=====================")
        print(index)
        print(best_ten_index)
        print(best_ten_frame_tfidf)
        
        print(c)
        print(s)
        row = [count, s, c.replace(" ", "\n"), "\n".join(best_ten_frame)]
        sample = {
            "count": count,
            "sentence": s,
            "frame_content": c.replace(" ", "\n"),
            "best_ten_frame": "\n".join(best_ten_frame),
            "frame_list":[],
            "lu": lu,
        }
        for i in best_ten_index:
            frame_info = frame_dict[int(i)]
            row.append(frame_info["name"])
            row.append(tfidf_value[i])
            row.append(" / ".join(frame_info["lexUnit"].keys()))
            row.append(frame_info["definition"])

            sample["frame_list"].append({
                #"frame_info": frame_info,
                "frame": frame_info["name"],
                "tfidf": tfidf_value[i],
                "lexical_unit": " / ".join(frame_info["lexUnit"].keys()),
                "definition": frame_info["definition"],
            })

        #pprint(row)
        table.append(row)
        data.append(sample)

    table = pd.DataFrame(table)
    table.to_excel("frame_data.xlsx")
    
    with open("frame_data.json", 'w', encoding='utf-8') as outfile:
        json.dump(data, outfile, indent=4)

    quit()

    # test
    vec = vectors[0]
    sorted_index = np.argsort(vec)[::-1]
    print(sorted_index[:5]) 
    print(vec[sorted_index[:5]])

    fig = plt.figure()
    #ax = fig.add_axes([0,0,1,1])
    num = 10

    x = [frame_dict[int(i)] for i in sorted_index[:num]]
    y = [int(i) for i in vec[sorted_index[:num]]]
    #x = ['C', 'C++', 'Java', 'Python', 'PHP']
    #y = [23, 17, 35, 29, 12]

    print(x)
    print(y)
    plt.bar(x, y)
    #plt.xticks(x, x, rotation='vertical')
    plt.xticks(x, x, rotation=60)
    #plt.legend()
    plt.tight_layout()
    plt.show()

def version_1(frame_info, max_value, min_value):
    print(frame_info)
    tfidf = frame_info["tfidf"]
    color = (frame_info["tfidf"]-min_value)/(max_value-min_value)*0.6+0.2
    bar_length = int(color*100)

    template = """
        <tr class="display"><td colspan="2"><div class="bar" style="width:{}%; background:rgba(0, 0, 0, {});"></div></td></tr>
        <tr style="color:rgba(0, 0, 0, {});">
            <td tfidf={}>{}</td>
            <td>{}</td>
        </tr>
    """.format(bar_length, color, color, tfidf, frame_info["frame"], frame_info["lexical_unit"])
    return template

def version_2(frame_info, max_value, min_value):
    print(frame_info)
    tfidf = frame_info["tfidf"]
    color = (frame_info["tfidf"]-min_value)/(max_value-min_value)*0.6+0.2
    bar_length = int(color*100)

    template = """
        <tr style="color:rgba(0, 0, 0, {});">
            <td tfidf="{}">
                {}
                <div class="bar_container">
                    <div class="bar" style="width:{}%; background:rgba(0, 0, 0, {});"></div>
                </div>
            </td>
            <td>{}</td>
        </tr>
    """.format(
        color,
        tfidf, 
        frame_info["frame"], 
        bar_length,
        color,
        frame_info["lexical_unit"]
    )
    return template

def version_3(frame_info, max_value, min_value):
    print(frame_info)
    tfidf = frame_info["tfidf"]
    color = (frame_info["tfidf"]-min_value)/(max_value-min_value)*0.6+0.2
    bar_length = int(color*100)

    lu_elements = []
    for lu in frame_info["lexical_unit"].split(" / "):
        lu_elements.append(
            """<span class="badge my_badge">{}</span>""".format(lu)
        ) 

    template = """
        <tr style="color:rgba(0, 0, 0, {});">
            <td tfidf="{}">
                {}
                <div class="bar_container">
                    <div class="bar" style="width:{}%; background:rgba(0, 0, 0, {});"></div>
                </div>
            </td>
            <td>{}</td>
        </tr>
    """.format(
        color,
        tfidf, 
        frame_info["frame"], 
        bar_length,
        color,
        "\n".join(lu_elements)
    )
    return template

def version_4(frame_info, max_value, min_value, lu_map):
    print(frame_info)
    tfidf = frame_info["tfidf"]
    color = (frame_info["tfidf"]-min_value)/(max_value-min_value)*0.6+0.2
    bar_length = int(color*100)

    lu_elements = []
    for lu in set(lu_map[frame_info["frame"]]):
        lu_elements.append(
            """<span class="badge my_badge">{}</span>""".format(lu)
        ) 

    template = """
        <tr style="color:rgba(0, 0, 0, {});">
            <td tfidf="{}">
                {}
                <div class="bar_container">
                    <div class="bar" style="width:{}%; background:rgba(0, 0, 0, {});"></div>
                </div>
            </td>
            <td>{}</td>
        </tr>
    """.format(
        color,
        tfidf, 
        frame_info["frame"], 
        bar_length,
        color,
        "\n".join(lu_elements)
    )
    return template

def version_5(frame_info, max_value, min_value, lu_map):
    print(frame_info)
    tfidf = frame_info["tfidf"]
    color = (frame_info["tfidf"]-min_value)/(max_value-min_value)*0.6+0.2
    bar_length = int(color*100)
    current_lu_map = set(lu_map[frame_info["frame"]])
    lu_elements = []
    for lu in current_lu_map:
        lu_elements.append(
            """<span class="badge badge-secondary">{}</span>""".format(lu)
        ) 
    
    for lu in frame_info["lexical_unit"].split(" / "):
        if lu not in current_lu_map:
            lu_elements.append(
                """<span class="badge my_badge">{}</span>""".format(lu)
            ) 

    template = """
        <tr style="color:rgba(0, 0, 0, {});">
            <td tfidf="{}">
                {}
                <div class="bar_container">
                    <div class="bar" style="width:{}%; background:rgba(0, 0, 0, {});"></div>
                </div>
            </td>
            <td>{}</td>
        </tr>
    """.format(
        color,
        tfidf, 
        frame_info["frame"], 
        bar_length,
        color,
        "\n".join(lu_elements)
    )
    return template

def version_6(frame_info, max_value, min_value):
    #print(frame_info)
    tfidf = frame_info["tfidf"]
    color = (frame_info["tfidf"]-min_value)/(max_value-min_value)*0.6+0.2
    bar_length = int(color*100)

    lu_elements = []
    for lu in frame_info["lexical_unit"].split(" / "):
        word, pos = lu.split(".",)
        lu = "{} ({})".format(word, pos)
        lu_elements.append(
            """<span class="badge my_badge">{}</span>""".format(lu)
        ) 

    template = """
        <tr style="color:rgba(0, 0, 0, {});">
            <td tfidf="{}">
                {}
                <div class="bar_container">
                    <div class="bar" style="width:{}%; background:rgba(0, 0, 0, {});"></div>
                </div>
            </td>
            <td>{}</td>
        </tr>
    """.format(
        color,
        tfidf, 
        frame_info["frame"], 
        bar_length,
        color,
        "\n".join(lu_elements)
    )
    return template

def generate_sample():
    with open("frame_data.json", 'r', encoding='utf-8') as infile:
        data = json.load(infile)

    data = data[1] 

    max_value = max(frame_info["tfidf"] for frame_info in data["frame_list"])
    min_value = min(frame_info["tfidf"] for frame_info in data["frame_list"])

    result = []
    for frame_info in data["frame_list"]:
        #template = version_1(frame_info, max_value, min_value)
        #template = version_2(frame_info, max_value, min_value)
        #template = version_3(frame_info, max_value, min_value) 
        #template = version_4(frame_info, max_value, min_value, data["lu"])
        #template = version_5(frame_info, max_value, min_value, data["lu"])
        template = version_6(frame_info, max_value, min_value) 
        result.append(template)

    with open("temp_output.html", 'w', encoding='utf-8') as outfile:
        outfile.write("\n".join(result))

    print()
    print(data["sentence"])

def generate_frame_representation(sample, frame_dict):
    frame = sample["y_frame"]
    sorted_index = np.argsort(frame, axis=1)[0, ::-1]
    
    best_ten_index = sorted_index[:30]
    best_ten_frame_tfidf = [frame[0][b] for b in best_ten_index]
    best_ten_frame = [frame_dict[int(b)] for b in best_ten_index]

    # build frame info
    frame_info_list = []
    for i, f, t in zip(best_ten_index, best_ten_frame, best_ten_frame_tfidf):
        frame_info_list.append({
            "frame": f["name"],
            "tfidf": t,
            "lexical_unit": " / ".join(f["lexUnit"].keys()),
            "definition": f["definition"],
        })

    max_value = max(best_ten_frame_tfidf)
    min_value = min(best_ten_frame_tfidf)

    result = []
    for frame_info in frame_info_list:
        #template = version_1(frame_info, max_value, min_value)
        #template = version_2(frame_info, max_value, min_value)
        #template = version_3(frame_info, max_value, min_value) 
        #template = version_4(frame_info, max_value, min_value, data["lu"])
        #template = version_5(frame_info, max_value, min_value, data["lu"])
        template = version_6(frame_info, max_value, min_value) 
        result.append(template)
    
    return "\n".join(result)

def generate_html(block=20):
    # load template
    with open("frame_template.html", 'r', encoding='utf-8') as infile:
        ori_template = infile.read()

    # load data
    with open("../data/human_evaluation_data_{}.json".format(block), 'r', encoding='utf-8') as infile:
        data = json.load(infile) 

    model = load_tfidf_model(block=block)
    frame_info_dict = get_frame_dictionary()
    frame_dict = {v:frame_info_dict[k] for k, v in model.vocabulary.items()}

    for count, sample in enumerate(data[:10]):
        frame_rep = generate_frame_representation(sample, frame_dict)
        template = ori_template.replace("{{frame_representation}}", frame_rep)
        template = template.replace("{{setting}}", "block_{}".format(20))
        template = template.replace("{{id}}", str(sample["index"]))

        ans = random.randint(0, 1)
        if ans == 0:
            template = template.replace("{{target}}", "0")
            story_1, story_2 = sample["y_text"], sample["option_text"]
        else:
            template = template.replace("{{target}}", "1")
            story_1, story_2 = sample["option_text"], sample["y_text"] 

        template = template.replace("{{story_1}}", story_1)
        template = template.replace("{{story_2}}", story_2)

        # save
        with open(os.path.join("html", "table", str(block), "{:0>4}.html".format(count)), 'w', encoding='utf-8') as outfile:
            outfile.write(template)

def generate_frame_representation_for_word_cloud(sample, frame_dict):
    frame = sample["y_frame"]
    sorted_index = np.argsort(frame, axis=1)[0, ::-1]
    
    best_ten_index = sorted_index[:30]
    best_ten_frame_tfidf = [frame[0][b] for b in best_ten_index]
    best_ten_frame = [frame_dict[int(b)] for b in best_ten_index]

    # build frame info
    frame_info_list = []
    for i, f, t in zip(best_ten_index, best_ten_frame, best_ten_frame_tfidf):
        frame_info_list.append({
            "frame": f["name"],
            "tfidf": t,
            "lexical_unit": " / ".join(f["lexUnit"].keys()),
            "definition": f["definition"],
        })
    return frame_info_list

def generate_html_wordcloud(block=20):
    # load template
    with open("word_cloud_template.html", 'r', encoding='utf-8') as infile:
        ori_template = infile.read()
    
    # load data
    with open(f"../data/human_evaluation_data_{block}.json", 'r', encoding='utf-8') as infile:
        data = json.load(infile)

    model = load_tfidf_model(block=block)
    frame_info_dict = get_frame_dictionary()
    frame_dict = {v:frame_info_dict[k] for k, v in model.vocabulary.items()}

    for count, sample in enumerate(data[:10]):
        frame_list = generate_frame_representation_for_word_cloud(sample, frame_dict)
        template = ori_template.replace("{{frame_list}}", str(frame_list))
        template = template.replace("{{setting}}", "block_{}".format(20))
        template = template.replace("{{id}}", str(sample["index"]))

        ans = random.randint(0, 1)
        if ans == 0:
            template = template.replace("{{target}}", "1")
            story_1, story_2 = sample["y_text"], sample["option_text"]
        else:
            template = template.replace("{{target}}", "2")
            story_1, story_2 = sample["option_text"], sample["y_text"] 

        template = template.replace("{{story_1}}", story_1)
        template = template.replace("{{story_2}}", story_2)

        # save
        with open(os.path.join("html", "word_cloud",  str(block), "{:0>4}.html".format(count)), 'w', encoding='utf-8') as outfile:
            outfile.write(template)


def get_story():
    with open("frame_data.json", 'r', encoding='utf-8') as infile:
        data = json.load(infile)

    for i in [5, 22, 76]:
        print("=================================")
        print("block id =", i)
        print(data[i]["sentence"])

def test_word_cloud():
    from wordcloud import WordCloud

    text = "For visualization, matplotlib is a basic library that enables many other libraries to run and plot on its base including seaborn or wordcloud that you will use in this tutorial. The pillow library is a package that enables image reading. Its tutorial can be found here. Pillow is a wrapper for PIL - Python Imaging Library. You will need this library to read in image as the mask for the wordcloud."
    wordcloud = WordCloud().generate(text)
    plt.imshow(wordcloud, interpolation="bilinear")
    plt.axis("off")
    plt.show()

def main():
    #draw_representation()
    #test_word_cloud()
    #get_story()

    #generate_sample()
    #generate_html(200)
    #generate_html(20)
    generate_html_wordcloud(20)

if __name__ == "__main__":
    main()
