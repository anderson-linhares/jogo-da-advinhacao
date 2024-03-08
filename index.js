const palpiteInput = document.getElementById('palpite-usuario');

const feedbackcontainer = document.getElementById('feedback-container');
 
const botaoAdvinhar = document.getElementById("botao-advinhar");
botaoAdvinhar.addEventListener('click', processGuess);

const numeroAleatorio = generateRandomNumber(20);

const botaoJogarNovamenteContainer = document.getElementById('botao-novamente-container');

const botaoJogarNovamente = document.getElementById('botao-jogar-novamente');
botaoJogarNovamente.addEventListener("click", recomecarJogo);

function recomecarJogo() {
    window.location.reload(true);  
}

function displayJogarNovamente(display) {
    if(displayJogarNovamente) {
        if(display){
            botaoJogarNovamenteContainer.style.display = 'block';
        }
        else {
            botaoJogarNovamenteContainer.style.display = 'none';
        }
    }
}

function generateRandomNumber(max) {
    const result = Math.floor(Math.random() * max) + 1;
    return result;
}

function processGuess() {
    let feedBackText;
    if(palpiteInput) {
        const palpite = palpiteInput.valueAsNumber;
            console.log('palpite', palpite)    
        if (palpite===numeroAleatorio) {
            feedBackText = `${palpite} está correto...<span class='resposta-certa'> Você Ganhou!</span>`;
            displayJogarNovamente(true)
        } else if(palpite>numeroAleatorio) {
            feedBackText = `${palpite} está acima... tente de novo!`;
        } else if(palpite<numeroAleatorio) {
            feedBackText = `${palpite} está abaixo... tente de novo!`;
        }
        else {
            feedBackText = `${palpite}... Tente de novo!`;
        }
    }    
    if(feedbackcontainer) {
        feedbackcontainer.innerHTML += '<br>' + feedBackText;
    }
}