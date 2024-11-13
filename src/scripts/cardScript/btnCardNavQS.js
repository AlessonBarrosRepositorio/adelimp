const areaSlide02 = document.getElementById('areaSlideQuemSomos');
const scrollLeftBtn02 = document.getElementById('scrollLeftBtnQS');
const scrollRightBtn02 = document.getElementById('scrollRightBtnQS');
let isDragging02 = false;
let startX02, scrollLeftDrag02;
let middleScrollPos02 = null;
carregou02 = true;
let scrollInterval; // variável para o intervalo de rolagem automática
let autoScrollPaused = false;

// Função para obter a largura do elemento com a classe 'carta02'
function getCartaWidth() {
    const cartaElement = document.querySelector('.carta02');
    return cartaElement ? cartaElement.offsetWidth : 100; // fallback para 100 pixels se não encontrar
}

function scrollLeft02() {
    const scrollStep02 = getCartaWidth();
    const targetScroll02 = Math.max(0, areaSlide02.scrollLeft - scrollStep02);
    areaSlide02.scrollTo({
        left: targetScroll02,
        behavior: 'smooth'
    });
}

function scrollRight02() {
    const scrollStep02 = getCartaWidth();
    const targetScroll02 = Math.min(areaSlide02.scrollWidth - areaSlide02.clientWidth, areaSlide02.scrollLeft + scrollStep02);
    areaSlide02.scrollTo({
        left: targetScroll02,
        behavior: 'smooth'
    });
}

// Função para a rolagem automática para a direita
function startAutoScroll() {
    stopAutoScroll(); // Garante que não haverá acúmulo de intervalos
    scrollInterval = setInterval(() => {
        if (!autoScrollPaused) {
            scrollRight02();
        }
    }, 5000);
}

// Interrompe a rolagem automática temporariamente ao clicar no botão
function pauseAutoScroll() {
    autoScrollPaused = true;
    stopAutoScroll(); // Para o intervalo atual
    setTimeout(() => {
        autoScrollPaused = false; // Retoma a rolagem automática após 7 segundos
        startAutoScroll();
    }, 7000);
}

// Para a rolagem automática imediatamente
function stopAutoScroll() {
    if (scrollInterval) clearInterval(scrollInterval);
}

scrollLeftBtn02.addEventListener('click', (event) => {
    event.preventDefault();
    pauseAutoScroll(); // Pausa a rolagem automática
    scrollLeft02();
});

scrollRightBtn02.addEventListener('click', (event) => {
    event.preventDefault();
    pauseAutoScroll(); // Pausa a rolagem automática
    scrollRight02();
});

areaSlide02.addEventListener('mousedown', (event) => {
    isDragging02 = true;
    startX02 = event.pageX - areaSlide02.offsetLeft;
    scrollLeftDrag02 = areaSlide02.scrollLeft;
    console.log('Mouse Down:', scrollLeftDrag02);
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
    const walk = (x - startX02) * 0.5;
    areaSlide02.scrollLeft = scrollLeftDrag02 - walk;
});

// Define a largura inicial quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    const initialWidth = areaSlide02.scrollWidth;
    areaSlide02.style.width = `${initialWidth}px`;
    startAutoScroll(); // Inicia a rolagem automática assim que a página carrega
});
