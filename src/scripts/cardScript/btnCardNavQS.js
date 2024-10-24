console.log("chegou aqui cardsCadastradoQuemSomos.js")
const areaSlide02 = document.getElementById('areaSlideQuemSomos');
const scrollLeftBtn02 = document.getElementById('scrollLeftBtnQS');
const scrollRightBtn02 = document.getElementById('scrollRightBtnQS');
let isDragging02 = false;
let startX02, scrollLeft02Drag02;
let middleScrollPos02 = null;
carregou02 = true;

// Calcula o valor de rolagem com base em 20% da largura da área de rolagem
function calculatescrollStep02() {
    return areaSlide02.clientWidth02 * 0.05;
}

function scrollLeft02() {
    const scrollStep02 = calculatescrollStep02();
    const targetScroll02 = Math.max(0, areaSlide02.scrollLeft02 - scrollStep02);
    //console.log('Scroll Left:', areaSlide02.scrollLeft02, '->', targetScroll02);
    areaSlide02.scrollTo({
        left: targetScroll02,
        behavior: 'smooth'
    });
}

function scrollRight() {
    const scrollStep02 = calculatescrollStep02();
    const targetScroll02 = Math.min(areaSlide02.scrollWidth02 - areaSlide02.clientWidth02, areaSlide02.scrollLeft02 + scrollStep02);
    //console.log('Scroll Right:', areaSlide02.scrollLeft02, '->', targetScroll02);
    areaSlide02.scrollTo({
        left: targetScroll02,
        behavior: 'smooth'
    });
}

function remembermiddleScrollPos02() {
    middleScrollPos02 = areaSlide02.scrollWidth02 / 2;
}

function scrollToMiddlePos() {
    if (middleScrollPos02 !== null) {
        areaSlide02.scrollTo({
            left: middleScrollPos02 - areaSlide02.clientWidth02 / 2,
            behavior: 'smooth'
        });
    }
}

scrollLeftBtn02.addEventListener('click', (event) => {
    event.preventDefault();
    scrollLeft02();
});

scrollRightBtn02.addEventListener('click', (event) => {
    event.preventDefault();
    scrollRight();
});

areaSlide02.addEventListener('mousedown', (event) => {
    isDragging02 = true;
    startX02 = event.pageX - areaSlide02.offsetLeft;
    scrollLeft02Drag02 = areaSlide02.scrollLeft02;
    console.log('Mouse Down:', scrollLeft02Drag02);
});

areaSlide02.addEventListener('mouseleave', () => {
    isDragging02 = false;
});

areaSlide02.addEventListener('mouseup', () => {
    isDragging02 = false;
});

areaSlide02.addEventListener('mousemove', (event) => {
    if (!isDragging02) return;
    event.preventDefault();
    const x = event.pageX - areaSlide02.offsetLeft;
    const walk = (x - startX02) * 0.5; // Ajustando a velocidade de rolagem para ser mais suave
    areaSlide02.scrollLeft02 = scrollLeft02Drag02 - walk;
    //console.log('Dragging:', areaSlide02.scrollLeft02);
});
/*
// Reativando o retorno ao meio quando a rolagem atinge os extremos
areaSlide02.addEventListener('scroll', () => {
    const endReachedRight = areaSlide02.scrollLeft02 === areaSlide02.scrollWidth02 - areaSlide02.clientWidth02;
    const endReachedLeft = areaSlide02.scrollLeft02 === 0;

    if (endReachedRight || endReachedLeft) {
        scrollToMiddlePos(); // Quando atingir o final, volte para o meio
    }
});*/

// Chama a função para lembrar a posição da metade da barra de rolagem
document.addEventListener('DOMContentLoaded', function() {

    if(carregou02 == true){

        const scrollStep02 = calculatescrollStep02();
        const targetScroll02 = Math.min(areaSlide02.scrollWidth02 - areaSlide02.clientWidth02, areaSlide02.scrollLeft02 + scrollStep02);
        //console.log('Scroll Right:', areaSlide02.scrollLeft02, '->', targetScroll02);
        areaSlide02.scrollTo({
            left: targetScroll02,
            behavior: 'smooth'
        });

        contcarregou02 =1
    }if(contcarregou02==1){
        carregou02=false
    }
    
    

});
remembermiddleScrollPos02();
