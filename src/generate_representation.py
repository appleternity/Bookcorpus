import json
import joblib
import os
import matplotlib
import matplotlib.pyplot as plt
import numpy as np
from nltk.corpus import framenet as fn
from wordcloud import WordCloud
from pprint import pprint
import pandas as pd

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
        template = version_5(frame_info, max_value, min_value, data["lu"])
        result.append(template)

    with open("temp_output.html", 'w', encoding='utf-8') as outfile:
        outfile.write("\n".join(result))

    print()
    print(data["sentence"])

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
    get_story()
    quit()

    generate_sample()

if __name__ == "__main__":
    main()
