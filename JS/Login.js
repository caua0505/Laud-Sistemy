function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const encryptedPassword = CryptoJS.SHA256(password).toString();

    if (username === "admin" && password === "1234") { // Exemplo de validação simples
      window.location.href = "index.Main.html"; // Redireciona para o sistema
    } else {
      alert("Usuário ou senha inválidos!");
    }
  }