const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Com quantos anos você pode tirar sua carteira de motorista?",
    alternativas: [
        {
            textoHoje em dia, os jovens com menos de 18 (dezoito) anos, não podem fazer a Carteira de motorista- CNH. Porém quando um jovem acima de 16 (dezesseis) anos, é emancipado ele passa a ter responsabilidades como um maior de idade. Sendo assim, os pais tem que fazer a autorização de emancipação.:,
            afirmacao: "Motivos para voçê tirar sua carteira de motorista:
Independência.
Mais oportunidades de empregos.
Não se atrasar nunca mais.
Fazer aquela viagem com as amigas.
Privacidade.
Não enfrentar ônibus lotados.
Ser o motorista da rodada."
        },
        {
        texto:"O primeiro passo para conseguir tirar sua primeira habilitação é, antes de mais nada, ir à uma autoescola de confiança. Lá mesmo será feito o agendamento do pré-cadastro e da entrega dos documentos exigidos pelo Detran ou Ciretran a da sua cidade, onde será iniciado o processo de habilitação.",
        afirmacao: "O que impede de tirar habilitação?
            Quem estiver sob efeito de condenação penal por delito de trânsito.
Quem estiver sob efeito de suspensão ou proibição do uso da permissão para dirigir ou da habilitação para dirigir.
"
        }
    ]
},

{
    enunciado: "?",
    alternativas: [
        {

        texto: "Quais são as questões que mais caem na prova do DETRAN?.",
        afirmacao: "Legislação de Trânsito: 12 questões (18h)
1.Direção Defensiva: 10 questões (16h)
2.Primeiros Socorros: 3 questões (4h)
3.Cidadania e Meio Ambiente: 3 questões (4h)
4.Mecânica Básica: 2 questões (3h)"
        },
        {
        texto:"Quanto vai custar a CNH em 2024?",
        afirmacao: "A emissão e envio da: CNH R$ 127,69; Exame psicológico: R$ 136,16. Exame médico: R$ 116,69 (R$ 85,57 pessoas com deficiência) Exame prático: R$ 48,62."
        }
    ]
},

{
    enunciado: "Qual a classificação de carteira de motorista??",
    alternativas: [
        {
        texto:"Para tirar a carteira, o cidadão precisará escolher quais categorias quer se especializar. Categorias essas que são subdivididas entre as letras A, B, C, D e E, e representam o tipo de automóvel que será conduzido, como motocicletas, carros, caminhões, vans entre outros.",
        afirmacao: "A	Motos
B	Carros e veículos de carga leve (até 3.500 kg ou 8 lugares para passageiros)
C	Caminhões pequenos e outros veículos de carga entre 3.500 e 6000 kgs de peso total)
D	Ônibus e microônibus com mais de 8 lugares para passageiros"
        },
        {
        texto:"Quais países aceitam CNH do Brasil?.",
        afirmacao: "Argentina (foto) e também na Bolívia, no Chile, na Colômbia, no Equador, na Guiana, no Paraguai, no Peru, no Uruguai e na Venezuela."
        }
    ]
}

]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return; 
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}
function mostraResultado(){
caixaPerguntas.textContent = "Suas ações mudam o mundo!";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}

mostraPergunta();
