# 📄 File: app.py
# 📂 Location: chess_web_fixed/
# 🧠 Language: Python

from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
