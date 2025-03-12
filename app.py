from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Simulação de banco de dados (em produção, use um banco real como MySQL ou PostgreSQL)
users = {"admin": "1234"}  # Exemplo: Nome de usuário e senha

@app.route('/')
def login_page():
    return render_template('login.html')  # Exibe a página de login

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']

    # Validação de usuário e senha
    if username in users and users[username] == password:
        return redirect(url_for('main_page'))  # Redireciona para a página principal
    else:
        return "Usuário ou senha inválidos!", 401  # Retorna erro 401 (Não autorizado)

@app.route('/main')
def main_page():
    return render_template('main.html')  # Página principal após login

if __name__ == '__main__':
    app.run(debug=True)
