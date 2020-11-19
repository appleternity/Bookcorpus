import json
import numpy as np
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from generate_representation import *

def analyze():
    with open("frame_human_eval.json", 'r', encoding='utf-8') as infile:
        data = json.load(infile)

    table = np.zeros([len(data), 5])
    for count, (hit_id, assignment_list) in enumerate(data.items()):
        for col, assignment in enumerate(assignment_list):
            ans = assignment["parsed_answer"]
            row = int(ans["id"])
            if int(ans["target"])+1 == int(ans["story"]):
                table[row, col] = 1

    print(table)

    avg = np.mean(table, axis=1)
    print(avg)

    total_avg = np.mean(table)
    print(total_avg)

def load_table(filename):
    with open(filename, 'r', encoding='utf-8') as infile:
        data = json.load(infile)

    id_list = np.array([
        int(assignment["parsed_answer"]["id"])
        for hit, assignment_list in data.items()
        for assignment in assignment_list
    ])
    max_id = id_list.max()
    min_id = id_list.min()

    table = np.zeros([max_id-min_id+1, 9])
    for count, (hit_id, assignment_list) in enumerate(data.items()):
        for col, assignment in enumerate(assignment_list):
            ans = assignment["parsed_answer"]
            row = int(ans["id"])-min_id
            if int(ans["target"]) == int(ans["story"]):
                table[row, col] = 1
    return table

def analyze_word_cloud():
    table_1 = load_table("wordcloud_human_eval_batch_1.json") 
    table_2 = load_table("wordcloud_human_eval_batch_2.json") 
    table = np.vstack([table_1, table_2])

    table = pd.DataFrame(
        table, 
        columns=[f"worker_{i}" for i in range(0, table.shape[1])],
        index=[f"question_{i}" for i in range(0, table.shape[0])]
    )
    print(table)
    table.to_excel("wordcloud_human_eval_batch.xlsx")

label_mapping = {
    "LGBM":0,
    "BERT":1,
    "Gold":2,
}
def load_prediction_table(filename):
    with open(filename, 'r', encoding='utf-8') as infile:
        data = json.load(infile)
    
    id_list = np.array([
        int(assignment["parsed_answer"]["id"])
        for hit, assignment_list in data.items()
        for assignment in assignment_list
    ])
    max_id = id_list.max()
    min_id = id_list.min()

    table = np.zeros([max_id-min_id+1, 9])
    for count, (hit_id, assignment_list) in enumerate(data.items()):
        for col, assignment in enumerate(assignment_list):
            ans = assignment["parsed_answer"]
            row = int(ans["id"])-min_id
            note = ans["note"].split(", ")
            annotated_label = label_mapping[note[int(ans["story"])-1]]
            table[row, col] = annotated_label
    return table

def analyze_word_cloud_prediction():
    table = load_prediction_table("wordcloud_prediction_human_eval_NAACL_150_new_batch_1.json")
    print(table)
    
    print(table.mean(axis=1))
    print(np.sum(table.mean(axis=1)<0.5))
    
    table = pd.DataFrame(
        table, 
        columns=[f"worker_{i}" for i in range(0, table.shape[1])],
        index=[f"question_{i}" for i in range(0, table.shape[0])]
    )
    print(table)
    table.to_excel("wordcloud_human_eval_NAACL_new_150_batch_1.xlsx")

def compute_similarity(block=20):
    # load data
    with open(f"../data/human_evaluation_data_{block}_filled.json", 'r', encoding='utf-8') as infile:
        data = json.load(infile)
    
    cosines = []
    for count, sample in enumerate(data[:100]):
        y_frame = np.array(sample["y_frame"]).reshape([1, -1])
        option_frame = np.array(sample["option_frame"]).reshape([1, -1])

        cosine = cosine_similarity(y_frame, option_frame)[0][0]
        cosines.append(cosine)

    print(cosines)
    table = pd.DataFrame({"cosine":cosines}, index=np.arange(len(cosines)))
    table.to_excel("cosine_similarity.xlsx")

def compute_document_similarity(block=20):
    import torch
    from transformers import AutoTokenizer, AutoModel

    #pretrained_model = "albert-large-v2"
    #pretrained_model = "albert-xxlarge-v2"
    #pretrained_model = "bert-base-uncased"
    pretrained_model = "bert-base-cased-finetuned-mrpc"

    # load data
    with open(f"../data/human_evaluation_data_{block}_filled.json", 'r', encoding='utf-8') as infile:
        data = json.load(infile)

    tokenizer = AutoTokenizer.from_pretrained(pretrained_model)
    model = AutoModel.from_pretrained(pretrained_model).to("cuda:0")
    model.eval()

    cosines = []
    for count, sample in enumerate(data[:100]):
        y_text = sample["y_text"] 
        option_text = sample["option_text"]

        y = torch.LongTensor([tokenizer(y_text, max_length=512, truncation=True)["input_ids"]]).to("cuda:0")
        option = torch.LongTensor([tokenizer(option_text, max_length=512, truncation=True)["input_ids"]]).to("cuda:0")

        with torch.no_grad():
            #y_rep = model(y)[0][:, 0, :].cpu().numpy()
            #option_rep = model(option)[0][:, 0, :].cpu().numpy()
            y_rep = model(y)[1].cpu().numpy()
            option_rep = model(option)[1].cpu().numpy()
            cosine = cosine_similarity(y_rep, option_rep)[0][0]
            cosines.append(cosine)

    table = pd.DataFrame({"cosine":cosines}, index=np.arange(len(cosines)))
    table.to_excel(f"cosine_similarity_{pretrained_model.replace('-', '_')}.xlsx")

def show_vector(block=20):

    # load data
    with open(f"../data/human_evaluation_data_{block}_filled.json", 'r', encoding='utf-8') as infile:
        data = json.load(infile)

    # load frame info
    model = load_tfidf_model(block=block)
    frame_info_dict = get_frame_dictionary()
    frame_dict = {v:frame_info_dict[k] for k, v in model.vocabulary.items()}

    for count, sample in enumerate(data[:1]):
        y_frame = np.array(sample["y_frame"]).reshape([1, -1])
        frame_list = generate_frame_representation_for_word_cloud(sample, frame_dict)
        for frame in frame_list[:10]:
            print(frame["frame"], frame["tfidf"])

def main():
    #analyze()
    #analyze_word_cloud()
    #compute_similarity()
    #compute_document_similarity()
    #show_vector()
    analyze_word_cloud_prediction()

if __name__ == "__main__":
    main()
