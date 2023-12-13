from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route("/")
def index():
    print(url_for("index", _external=True))
    return render_template("index.html", hostpath=(url_for("index", _external=True)), question="-5*(x + 30) + 10*(-6 + 4x)", answer="= []5x []30 []60 []40")