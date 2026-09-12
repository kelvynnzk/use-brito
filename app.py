from flask import Flask

app = Flask(__name__)

@app.route("/mensagens/")
def home():
    return "Funcionando!"

if __name__ == "__main__":
    app.run(debug=True, port=5000)