function validateForm() {
  const nameInput = document.getElementById("name").value;
  const emailInput = document.getElementById("email").value;
  const messageInput = document.getElementById("message").value;

  // Campos vazios
  if (nameInput === "" || emailInput === "" || messageInput === "") {
    alert("Preencha todos os campos");
    return false;
  }

  // Email
  if (emailInput.length < 5 || emailInput.length > 50) {
    alert("O email deve ter entre 5 e 50 caracteres");
    return false;
  }

  // Nome
  if (nameInput.length < 3 || nameInput.length > 50) {
    alert("O nome deve ter entre 3 e 50 caracteres");
    return false;
  }

  // Mensagem
  if (messageInput.length < 10 || messageInput.length > 200) {
    alert("A mensagem deve ter entre 10 e 200 caracteres");
    return false;
  }

  // Regex do email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailInput)) {
    alert("Digite um email válido");
    return false;
  }

  return true;
}

// Form
const form = document.querySelector(".contato_form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validateForm()) {
    alert("Formulário enviado com sucesso!");
  }
});
