/*var btn = document.querySelector('#show-or-hide');
var container = document.querySelector('.opcoes');

btn.addEventListener('click', function(){
    if(container.style.display ==='block'){
        container.style.display='none';
    }else{
        container.style.display ='block';
    }
});*/
const larguraJanela = window.innerWidth;
const alturaJanela = window.innerHeight;
const opcoes = document.getElementById('Opcoes');

// Aqui você deve usar o elemento 'opcoes' que foi obtido com getElementById
opcoes.style.width = `${larguraJanela * 0.5}px`;
opcoes.style.height = `${alturaJanela}px`;


var btn = document.querySelector('#show-or-hide');
var container = document.querySelector('.opcoes');

// Função para verificar se o clique ocorreu dentro ou fora do elemento .opcoes
function isClickInsideElement(event) {
    return container.contains(event.target);
}

// Adicionar um ouvinte de evento de clique ao documento inteiro
document.addEventListener('click', function(event) {
    if (isClickInsideElement(event)) {
        // Clique ocorreu dentro do elemento .opcoes, não faça nada
        return;
    }

    // Clique ocorreu fora do elemento .opcoes, então feche-o
    container.style.display = 'none';
});

btn.addEventListener('click', function(event) {
    // Impedir que o clique no botão seja propagado para o documento
    event.stopPropagation();
    
    if (container.style.display === 'block') {
        container.style.display = 'none';
    } else {
        container.style.display = 'block';
    }
});

// Impedir que o clique dentro do elemento .opcoes se propague para o documento
container.addEventListener('click', function(event) {
    event.stopPropagation();
});
