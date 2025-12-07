
def align(sentence, direction, width):

    padding = width - len(sentence)
    spaces = " " * padding

    if direction == "LEFT":
        return sentence + spaces
    else:
        return spaces + sentence

if __name__ == "__main__":

    paragraphs = [
        ['Hello!', 'world'],
        ['How. areYou', 'doing'],
        ['Please Look', 'and align', 'to right']
    ]

    aligns = ['LEFT', 'RIGHT', 'RIGHT']

    width = 16


    topRow = "*" * width
    res = [topRow]

    for j in range(len(paragraphs)):
        paragraph = paragraphs[j]
        direction = aligns[j]
        temp = ""
        for i in range(len(paragraph)):
            word = paragraph[i]

            if i != 0:
                word = " " + word

            if len(word) + len(temp) > (width - 2):
                ans = (align(temp, direction, width-2))
                res.append("*" + ans + "*")
                temp = ""

            else:
                temp = temp + word

        if temp != "":
                ans = (align(temp, direction, width-2))
                res.append("*" + ans + "*")
    res.append(topRow)
    for row in res:
        print(row)



                





