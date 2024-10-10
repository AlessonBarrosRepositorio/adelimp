// parte 1
const personagens = document.querySelectorAll('.personagem');
//parte 2
personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth< 450){
            window.scrollTo({top: 0,behavior:'smooth'});
        }

        //parte 3

        RemoverSelecaoDoPersonagem();

        personagem.classList.add('selecionado');

        // ob2 parte 1
        AlterarImagemPersonagemSelecionado(personagem);

        //novo nome

        AlterarNomePersonagemSelecionado(personagem);

        AlteraDescricaoSoPersonagemSlecionado(personagem);

    })
})


function AlteraDescricaoSoPersonagemSlecionado(personagem) {
    const dPersonagem = document.getElementById('descricao-personagem');
    dPersonagem.innerText = personagem.getAttribute('data-description');
}

function AlterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');

    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function AlterarImagemPersonagemSelecionado(personagem) {
    const personagemGrande = document.querySelector('.personagem-grande');


    const idPersonagem = personagem.attributes.id.value;


    personagemGrande.src = `./src/midia/imgs/PrimeiraPagina/fundo/card-${idPersonagem}.png`;
}

function RemoverSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}