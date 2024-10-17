// Vetor com links de imagens
const imagens = {
    imagem01: "https://live.staticflickr.com/65535/54073654536_d8ea0a9b79_m.jpg",
    imagem02: "https://live.staticflickr.com/65535/54073908558_ce21184723_m.jpg",
    imagem03: "https://live.staticflickr.com/65535/54073980099_5c351549ec_m.jpg",
    imagem04:"https://live.staticflickr.com/65535/54072771492_3516312fb5_m.jpg",
    imagem05:"https://live.staticflickr.com/65535/54072771507_902ff1f147_m.jpg"
};

// parte 1
const personagens = document.querySelectorAll('.personagem');

//parte 2
personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        //parte 3
        RemoverSelecaoDoPersonagem();

        personagem.classList.add('selecionado');

        // ob2 parte 1
        AlterarImagemPersonagemSelecionado(personagem);

        //novo nome
        AlterarNomePersonagemSelecionado(personagem);

        AlteraDescricaoSoPersonagemSlecionado(personagem);
    });
});

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

    // Usar o vetor de URLs em vez de caminho local
    personagemGrande.src = imagens[idPersonagem] || 'default-image-url.png';  // Coloque um link padrão caso a imagem não seja encontrada
}

function RemoverSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    if (personagemSelecionado) {
        personagemSelecionado.classList.remove('selecionado');
    }
}
