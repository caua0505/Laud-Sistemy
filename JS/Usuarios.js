let usuarios = [];

// Função para adicionar um novo usuário
function adicionarUsuario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cargo = document.getElementById('cargo').value;
    const senha = document.getElementById('senha').value;

    // Validação
    if (nome && email && cargo && senha) {
        const usuarioExistente = usuarios.find(u => u.email === email);

        if (usuarioExistente) {
            alert('Este e-mail já está cadastrado.');
            return;
        }

        const usuario = {
            id: Date.now(),
            nome,
            email,
            cargo,
            senha  // Guarda a senha (idealmente deveria ser criptografada)
        };

        usuarios.push(usuario);
        alert('Usuário cadastrado com sucesso!');
        limparFormulario();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

// Função de Login
function fazerLogin() {
    const email = document.getElementById('login-email').value;
    const senha = document.getElementById('login-senha').value;

    const usuario = usuarios.find(u => u.email === email && u.senha === senha);

    if (usuario) {
        alert(`Bem-vindo, ${usuario.nome}!`);
        window.location.href = 'sistema.html';  // Redireciona para a página do sistema
    } else {
        alert('E-mail ou senha incorretos.');
    }
}

// Função para limpar o formulário após cadastro
function limparFormulario() {
    document.getElementById('user-form').reset();
}
