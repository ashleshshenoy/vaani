import nltk

def tensing(filtered_text, tense):
        #adding the specific word to specify tense
        words = filtered_text
        temp=[]
        for w in words:
            if w=='I':
                temp.append('me')
            else:
                temp.append(w)
        words = temp
        probable_tense = max(tense,key=tense.get)

        if probable_tense == "past" and tense["past"]>=1:
            temp = ["before"]
            temp = temp + words
            words = temp
        elif probable_tense == "future" and tense["future"]>=1:
            if "Will" not in words:
                    temp = ["will"]
                    temp = temp + words
                    words = temp
            else:
                pass
        elif probable_tense == "present":
            if tense["present_continuous"]>=1:
                temp = ["now"]
                temp = temp + words
                words = temp
        return words