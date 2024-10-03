const areaSlide = document.getElementById('areaSlide');
const scrollLeftBtn = document.getElementById('scrollLeftBtn');
const scrollRightBtn = document.getElementById('scrollRightBtn');
let isDragging = false;
let startX, scrollLeftDrag;
let middleScrollPos = null;
carregou = true;

// Calcula o valor de rolagem com base em 20% da largura da área de rolagem
function calculateScrollStep() {
    return areaSlide.clientWidth * 0.2;
}

function scrollLeft() {
    const scrollStep = calculateScrollStep();
    const targetScroll = Math.max(0, areaSlide.scrollLeft - scrollStep);
    //console.log('Scroll Left:', areaSlide.scrollLeft, '->', targetScroll);
    areaSlide.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
    });
}

function scrollRight() {
    const scrollStep = calculateScrollStep();
    const targetScroll = Math.min(areaSlide.scrollWidth - areaSlide.clientWidth, areaSlide.scrollLeft + scrollStep);
    //console.log('Scroll Right:', areaSlide.scrollLeft, '->', targetScroll);
    areaSlide.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
    });
}

function rememberMiddleScrollPos() {
    middleScrollPos = areaSlide.scrollWidth / 2;
}

function scrollToMiddlePos() {
    if (middleScrollPos !== null) {
        areaSlide.scrollTo({
            left: middleScrollPos - areaSlide.clientWidth / 2,
            behavior: 'smooth'
        });
    }
}

scrollLeftBtn.addEventListener('click', (event) => {
    event.preventDefault();
    scrollLeft();
});

scrollRightBtn.addEventListener('click', (event) => {
    event.preventDefault();
    scrollRight();
});

areaSlide.addEventListener('mousedown', (event) => {
    isDragging = true;
    startX = event.pageX - areaSlide.offsetLeft;
    scrollLeftDrag = areaSlide.scrollLeft;
    console.log('Mouse Down:', scrollLeftDrag);
});

areaSlide.addEventListener('mouseleave', () => {
    isDragging = false;
});

areaSlide.addEventListener('mouseup', () => {
    isDragging = false;
});

areaSlide.addEventListener('mousemove', (event) => {
    if (!isDragging) return;
    event.preventDefault();
    const x = event.pageX - areaSlide.offsetLeft;
    const walk = (x - startX) * 0.5; // Ajustando a velocidade de rolagem para ser mais suave
    areaSlide.scrollLeft = scrollLeftDrag - walk;
    //console.log('Dragging:', areaSlide.scrollLeft);
});
/*
// Reativando o retorno ao meio quando a rolagem atinge os extremos
areaSlide.addEventListener('scroll', () => {
    const endReachedRight = areaSlide.scrollLeft === areaSlide.scrollWidth - areaSlide.clientWidth;
    const endReachedLeft = areaSlide.scrollLeft === 0;

    if (endReachedRight || endReachedLeft) {
        scrollToMiddlePos(); // Quando atingir o final, volte para o meio
    }
});*/

// Chama a função para lembrar a posição da metade da barra de rolagem
document.addEventListener('DOMContentLoaded', function() {

    if(carregou == true){

        const scrollStep = calculateScrollStep();
        const targetScroll = Math.min(areaSlide.scrollWidth - areaSlide.clientWidth, areaSlide.scrollLeft + scrollStep);
        //console.log('Scroll Right:', areaSlide.scrollLeft, '->', targetScroll);
        areaSlide.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });

        contCarregou =1
    }if(contCarregou==1){
        carregou=false
    }
    
    

});
rememberMiddleScrollPos();
