function enviarWhats(event) {
event.preventDefault();

const nome = document.getElementById('nome').value;
const mensagem = document.getElementById('mensagem').value;
const telefone = '556195858737';
const texto = `Olá, meu nome é ${nome}. ${mensagem}`;
const formatada = encodeURIComponent(texto);
const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${formatada}`;

window.open(url, '_blank');
}