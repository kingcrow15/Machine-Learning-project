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

@app.route("/top100")
def top100():
	return render_template('top100.html')

@app.route("/comedy")
def comedy():
	return render_template('comedy.html')



@app.route("/action")
def action():
	return render_template('action.html')

@app.route('/top250')
def top250():
	return render_template('Top250.html')

@app.route('/top1000')
def top1000():
	return render_template('Top1000.html')

@app.route('/node', methods=['GET','POST'])
def noder():
	if request.method=='POST':
		name=request.json['name']
		l=node.execute(name)
		return json.dumps(l,200,{'ContentType':'application/json'})
	return render_template('nr.html')

@app.route('/recommendation', methods=['GET','POST'])
def recommend():
	recommendation =None
	if request.method=='POST':
		# try:
		like1=request.json['like1']
		like2=request.json['like2']
		like3=request.json['like3']
		dislike1=request.json['dislike1']
		dislike2=request.json['dislike2']
		dislike3=request.json['dislike3']
		d=id3.execute([like1,like2,like3,dislike1,dislike2,dislike3])
		print(d)
		if len(d)==0:
			d={'hello':"Well, this sucks. ZERO recommended movies :("}
		recommendation = json.dumps(d,200,{'ContentType':'application/json'})
		return redirect(url_for("recommend1"))
		# except Exception:
		# 	return "FAIL!"
	return render_template("ar.html", recommendations=recommendation)

@app.route('/recommend', methods=['GET','POST'])
def recommend1():
	if request.method=='POST':
		# try:
		like1=request.json['like1']
		like2=request.json['like2']
		like3=request.json['like3']
		dislike1=request.json['dislike1']
		dislike2=request.json['dislike2']
		dislike3=request.json['dislike3']
		d=id3.execute([like1,like2,like3,dislike1,dislike2,dislike3])
		print (d)
		if len(d)==0:
			d={'hello':"Well, this sucks. ZERO recommended movies :("}
		# return json.JSONEncoder.default(self, obj)
		json.dumps(d,200,{'ContentType':'application/json'})
		# except Exception:
		# 	return "FAIL!"
	return render_template("AdvancedRecommendation.html")


if __name__ == '__main__':
    app.run(debug=True)