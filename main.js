const caixaPrincipal = document.querySelector(“.caixa-
principal”);

const caixaPerguntas = document.querySelector(“.caixa-
perguntas”);

const caixaAlternativas = document.querySelector(“.caixa-
alternativas”);

const caixaResultado = document.querySelector(“.caixa-
resultado”);

const textoResultado = document.querySelector(“.texto-
resultado”);

const perguntas = [
{
enunciado: “Pergunta 1”,
alternativas: [“Alternativa 1”, “Alternativa 2”],
},
{
enunciado: “Pergunta 2”,
alternativas: [“Alternativa 1”, “Alternativa 2”],
},
];
let atual = 0;
let preguntaAtual;

function mostraPergunta(){
  preguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas(){
  for (const alternativas of perguntaAtual.alternativas){
    conts botaoAlternativa = document
