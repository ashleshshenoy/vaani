CDN_URL = "http://localhost:5500/public/videos/"
database = "minute why book learn"


def search(words):
		filtered_text = []
		for w in words:
			#splitting the word if its animation is not present in database
			if w not in database:
				for c in w:
					filtered_text.append(c + ".mp4")
				filtered_text.append('word_break' +".mp4")
				#otherwise animation of word
			else:
				filtered_text.append(CDN_URL + w + ".mp4")
		return filtered_text