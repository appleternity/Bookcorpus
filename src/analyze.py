import json
import numpy as np
import pandas as pd

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

def main():
    analyze()

if __name__ == "__main__":
    main()
