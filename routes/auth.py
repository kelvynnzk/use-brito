from functools import wraps
from flask import session, request, jsonify, flash, redirect, url_for
from werkzeug.security import generate_password_hash, check_password_hash
from database.models import get_connection

# funcao para buscar administrador no banco de dados
def get_admin_by_username(username):
    conexao = get_connection()
    if conexao is None:
        return None

        try:
            cursor = conexao.cursor(dictionary=True)
            cursor.execute("SELECT * FROM administrador WHERE username = %s", (username,))
            admin = cursor.fetchone()
            return admin
        except Exception as e:
            print(f"Error ao buscar administrador: {e}")
        finally:
            cursor.close()
            conexao.close()
def validacao():
    def decorator(f):
        @wraps(f)
        def decorated_fuction(*args, **kwargs):
            if 'username' not in session:
                return jsonify({"message": "Usuario nao autenticado"}), 401 #jsonify ela funciona para criar mensagens
            username = session['username']
            admin = get_admin_by_username(username)
            if admin is None:
                return jsonify({"message": "Administrador nao encontrado"}), 401
            return f(*args, **kwargs)
        return decorated_fuction
    return decorator
def login():
    username = request.form.get("username")
    password = request.form.get("password")
    admin = get_admin_by_username(username)
    if admin is None:
        flash("Usuario e senha invalidos. Tente novamente.", "error")
        return redirect(url_for('login'))
    if not check_password_hash(admin['password']):
        flash("Usuario e senha invalidos. Tente novamente.", "error")
        return redirect(url_for('login'))
    session['username'] = username
    flash("Login realizado com sucesso!")
    return redirect(url_for('dashboard'))




