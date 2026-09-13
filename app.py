from flask import Flask
import routes.auth

app = Flask(__name__)
app.secret_key = "use-brito"

@app.route("/login", methods=["POST"])
def login():
    return routes.auth.login()



@app.route("/")
def home():
    return "Funcionando!"

if __name__ == "__main__":
    app.run(debug=True, port=5000)