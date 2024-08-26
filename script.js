const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const botaoCriptografar = document.querySelector(".botao-criptografar");
const botaoDescriptografar = document.querySelector(".botao-descriptografar");
const botaoCopiar = document.querySelector(".botao-copiar");



botaoCriptografar.addEventListener("click", botaoCriptografarClick);
botaoDescriptografar.addEventListener("click", botaoDescriptografarClick);
botaoCopiar.addEventListener("click", botaoCopiarClick);

function botaoCriptografarClick() {
  const textoCriptogradado = criptografar(textArea.value);
  mensagem.value = textoCriptogradado;
  textArea.value = "";
}

function botaoDescriptografarClick() {
  const textoDescriptografado = descriptografar(mensagem.value);
  textArea.value = textoDescriptografado;
  mensagem.value = "";
}

function botaoCopiarClick() {
  mensagem.select();
  document.execCommand("copy");
}

function criptografar(stringCriptografada) {
  const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringCriptografada = stringCriptografada.toLowerCase();

  for (const [char, replacement] of matrizCodigo) {
    stringCriptografada = stringCriptografada.replace(new RegExp(char, 'g'), replacement);
  }

  return stringCriptografada;
}

function descriptografar(stringDescriptografada) {
  const matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
  stringDescriptografada = stringDescriptografada.toLowerCase();

  for (const [replacement, char] of matrizCodigo) {
    stringDescriptografada = stringDescriptografada.replace(new RegExp(replacement, 'g'), char);
  }

  return stringDescriptografada;
}
