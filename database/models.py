import mysql.connector
from mysql.connector import Error
from mysql.connector.constants import ClientFlag

def get_connection():
    try:
        conexao = mysql.connector.connect(
            host='localhost', # o banco esta rodando na propria maquina
            user='root', # usuario padrao do xampp
            password='', #senha vazia e o padrao do xampp
            database='use-brito', # nome do banco de dados
            client_flags=[ClientFlag.SSL],
        )
        return conexao
    # Se algo der errado ate aqui sem erro, capturamos o erroaqui em vez de travar o sistema
    except Error as e:
        print(f"Erro ao conectar: {e}")
        return None
    
if __name__ == "__main__":
    conexao = get_connection()
    if conexao is not None and conexao.is_connected():
        print("Conexao realizada com sucesso!")
        conexao.close()
    else:
        print("Falha ao conectar.")