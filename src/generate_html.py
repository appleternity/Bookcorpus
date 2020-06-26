import os
import json

data_dir = "/media/appleternity/8a79ff6d-3069-4261-a10c-99726f21339b/workspace/bookcorpus"

def generate_dashboard():
    # load data
    with open(os.path.join(data_dir, "fiction_list.json"), 'r', encoding='utf-8') as infile:
        fiction_list = json.load(infile)["Fiction"]

    # generate html
    book_info = []
    for count, fiction_info in enumerate(fiction_list):
        _id = fiction_info[0]
        path = os.path.join(data_dir, "corpus", fiction_info[1].split("/")[-1])
        title = fiction_info[1].split("/")[-1].split("__")[1].replace(".txt", "")
        url = fiction_info[2]
        try:
            genres = [">".join(genre) for genre in fiction_info[3]]
        except Exception:
            print(fiction_info[3])
            for genre in fiction_info[3]:
                print(genre)
            quit()
        genres_str = "<br>".join(genres)
        book_info.append("""
            <tr>
                <td>{}</td>
                <td>{}</td>
                <td><a href="{}" target="_blank">{}</a></td>
                <td><a href="{}" target="_blank">{}</a></td>
                <td class="small">{}</td>
            </tr>
        """.format(count, _id, path, title, url, "link", genres_str))

    # load template
    with open("template.html", 'r', encoding='utf-8') as infile:
        template = infile.read()

    # render
    html = template.replace(
        "{{content}}", 
        "\n".join(book_info)
    )
    with open("dashboard.html", 'w', encoding='utf-8') as outfile:
        outfile.write(html)

def main():
    generate_dashboard()

if __name__ == "__main__":
    main()
