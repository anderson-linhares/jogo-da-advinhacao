const botaoTema = document.getElementById("botao-tema");
const pagContainer = document.body;
botaoTema.addEventListener("click", () => {
    const temaAtual = pagContainer.classList.contains(TEMA_NOTURNO)
        ? TEMA_DIURNO
        : TEMA_NOTURNO;
    aplicarTema(temaAtual);
});

const TEMA_KEY = ("tema")
const TEMA_NOTURNO =("tema-escuro")
const TEMA_DIURNO = ("tema-claro")

function aplicarTema(tema) {
    pagContainer.classList.remove(TEMA_DIURNO,TEMA_NOTURNO);
    pagContainer.classList.add(tema);

    if (tema === TEMA_DIURNO) {
       botaoTema.classList.remove("btn-dark");
        botaoTema.classList.add("btn-light");
        botaoTema.textContent = "🌞" ; 
    }
    else {
    botaoTema.classList.remove("btn-light");
    botaoTema.classList.add("btn-dark");
    botaoTema.textContent = "🌜"};

    localStorage.setItem(TEMA_KEY, tema);
}

const temaSalvo =localStorage.getItem(TEMA_KEY);

if (temaSalvo) {
    aplicarTema(temaSalvo)
}