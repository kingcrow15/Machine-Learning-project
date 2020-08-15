<<<<<<< HEAD
#importing required libraries 
# %matplotlib inline
import sys
import csv

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
pd.options.display.max_columns = None

from scipy import stats
from ast import literal_eval
from importlib import reload 
reload(sys)
from flask import Flask, jsonify, render_template,request,redirect
import json
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.metrics.pairwise import linear_kernel, cosine_similarity
from nltk.stem.snowball import SnowballStemmer
from nltk.stem.wordnet import WordNetLemmatizer
from nltk.corpus import wordnet
from surprise import Reader, Dataset, SVD
from surprise.model_selection import cross_validate

import warnings; warnings.simplefilter('ignore')

from flask import url_for
app=Flask(__name__)

links_small = pd.read_csv('./static/data/links_small.csv')
links_small = links_small[links_small['tmdbId'].notnull()]['tmdbId'].astype('int')
smd = pd.read_csv('smd.csv')
smd = smd.reset_index()
titles = smd['title']
indices = pd.Series(smd.index, index=smd['title'])
tf = TfidfVectorizer(analyzer='word',ngram_range=(1, 2),min_df=0, stop_words='english')
smd['tagline'] = smd['tagline'].fillna('')
smd['description'] = smd['overview'] + smd['tagline']
smd['description'] = smd['description'].fillna('')
tfidf_matrix = tf.fit_transform(smd['description'])
cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)
cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)

=======
import sys
from importlib import reload 
reload(sys)
# sys.setdefaultencoding('utf8')
from flask import Flask,render_template,request,redirect
import json
# import id3
# import node
from flask import url_for
app=Flask(__name__)

>>>>>>> Joseph
@app.route('/')
@app.route("/home")
def index():
	return render_template('index.html')

@app.route("/about")
def about():
	return render_template('about.html')

@app.route("/forme")
def forme():
	return render_template('forme.html')

@app.route("/forus")
def forus():
	return render_template('forus.html')

@app.route("/top20")
def top20():
	return render_template('top20.html')


@app.route("/genres")
def genres():
	return render_template('genres.html')

<<<<<<< HEAD


# @app.route("/search", method=["POST"])
# flask post form values
# @app.route("/search/<movie>", method=["GET"])
# def search(movie):
@app.route("/search")
def search():
	# title = request.form.get('textnames')
	title = "The Dark Knight"
	idx = indices[title]

	sim_scores = list(enumerate(cosine_sim[idx]))
	sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
	sim_scores = sim_scores[1:26]
	movie_indices = [i[0] for i in sim_scores]

	movies = smd.iloc[movie_indices][['title', 'vote_count', 'vote_average', 'year', 'poster_path', 'id' ]]
	vote_counts = movies[movies['vote_count'].notnull()]['vote_count'].astype('int')
	vote_averages = movies[movies['vote_average'].notnull()]['vote_average'].astype('int')
	m = vote_counts.quantile(0.95)	
	C = vote_averages.mean()
	m = vote_counts.quantile(0.60)
	def weighted_rating(x):
		v = x['vote_count']
		R = x['vote_average']
		return (v/(v+m) * R) + (m/(m+v) * C)
	qualified = movies[(movies['vote_count'] >= m) & (movies['vote_count'].notnull()) & (movies['vote_average'].notnull())]
	qualified['vote_count'] = qualified['vote_count'].astype('int')
	qualified['vote_average'] = qualified['vote_average'].astype('int')
	qualified['wr'] = qualified.apply(weighted_rating, axis=1)

	qualified = qualified.sort_values('wr', ascending=False).head(10)
	print("----------------------")
	# recommend = []
	# for x in qualified.iterrows():
	# 	recommend.append(x)
	# print(recommend)
	# recommend
	ad = qualified.to_dict()
	dc = {}
	for x in ad:
		dc[x] = list(ad[x].values())
		# print(x)
	dc = jsonify(dc)
	return dc

=======
@app.route("/search")
def search():
	return render_template('search.html')
>>>>>>> Joseph



@app.route("/action")
def action():
	return render_template('action.html')

<<<<<<< HEAD
@app.route('/top250')
def top250():
	return render_template('Top250.html')
=======
# @app.route('/top250')
# def top250():
# 	return render_template('Top250.html')
>>>>>>> Joseph

@app.route('/top1000')
def top1000():
	return render_template('Top1000.html')

<<<<<<< HEAD


if __name__ == '__main__':
    app.run(debug=True)
=======
# @app.route('/node', methods=['GET','POST'])
# def noder():
# 	if request.method=='POST':
# 		name=request.json['name']
# 		l=node.execute(name)
# 		return json.dumps(l,200,{'ContentType':'application/json'})
# 	return render_template('nr.html')

# @app.route('/recommendation', methods=['GET','POST'])
# def recommend():
# 	recommendation =None
# 	if request.method=='POST':
# 		# try:
# 		like1=request.json['like1']
# 		like2=request.json['like2']
# 		like3=request.json['like3']
# 		dislike1=request.json['dislike1']
# 		dislike2=request.json['dislike2']
# 		dislike3=request.json['dislike3']
# 		d=id3.execute([like1,like2,like3,dislike1,dislike2,dislike3])
# 		print(d)
# 		if len(d)==0:
# 			d={'hello':"Well, this sucks. ZERO recommended movies :("}
# 		recommendation = json.dumps(d,200,{'ContentType':'application/json'})
# 		return redirect(url_for("recommend1"))
# 		# except Exception:
# 		# 	return "FAIL!"
# 	return render_template("ar.html", recommendations=recommendation)

# @app.route('/recommend', methods=['GET','POST'])
# def recommend1():
# 	if request.method=='POST':
# 		# try:
# 		like1=request.json['like1']
# 		like2=request.json['like2']
# 		like3=request.json['like3']
# 		dislike1=request.json['dislike1']
# 		dislike2=request.json['dislike2']
# 		dislike3=request.json['dislike3']
# 		d=id3.execute([like1,like2,like3,dislike1,dislike2,dislike3])
# 		print (d)
# 		if len(d)==0:
# 			d={'hello':"Well, this sucks. ZERO recommended movies :("}
# 		# return json.JSONEncoder.default(self, obj)
# 		json.dumps(d,200,{'ContentType':'application/json'})
# 		# except Exception:
# 		# 	return "FAIL!"
# 	return render_template("AdvancedRecommendation.html")


if __name__ == '__main__':
    app.run(debug=True)
>>>>>>> Joseph
