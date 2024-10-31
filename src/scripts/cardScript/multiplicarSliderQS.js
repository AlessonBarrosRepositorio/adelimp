const areaSlides02 = document.getElementById('areaSlideQuemSomos');

// Função para duplicar o conteúdo para a direita
function duplicateContentRight02() {
    const children02 = areaSlides02.children;
    const numchildren02 = children02.length;
    const clones02 = [];

    // Clonar todos os elementos
    for (let i = 0; i < numchildren02; i++) {
        const clone02 = children02[i].cloneNode(true);
        clones02.push(clone02);
    }

    // Adicionar clones02 à direita
    for (let i = 0; i < clones02.length; i++) {
        areaSlides02.appendChild(clones02[i]);
    }
}

// Função para duplicar o conteúdo para a esquerda
function duplicateContentLeft02() {
    const children02 = areaSlides02.children;
    const numchildren02 = children02.length;
    const clones02 = [];

    // Clonar todos os elementos
    for (let i = 0; i < numchildren02; i++) {
        const clone02 = children02[i].cloneNode(true);
        clones02.push(clone02);
    }

    // Adicionar clones02 à esquerda
    for (let i = clones02.length - 1; i >= 0; i--) {
        areaSlides02.insertBefore(clones02[i], children02[0]);
    }
}

// Função para centralizar a barra de rolagem
function centerScroll02() {
    const totalWidth02 = areaSlides02.scrollWidth;
    const visibleWidth02 = areaSlides02.clientWidth;
    areaSlides02.scrollLeft = (totalWidth02 - visibleWidth02) / 2;
}

// Função para verificar a posição da rolagem e duplicar o conteúdo conforme necessário
function checkScroll02() {
    const totalWidth02 = areaSlides02.scrollWidth;
    const visibleWidth02 = areaSlides02.clientWidth;

    // Se o usuário rolar para o final da direita, duplicar o conteúdo à direita
    if (areaSlides02.scrollLeft + visibleWidth02 >= totalWidth02 - 1) {
        duplicateContentRight02();
    }

    // Se o usuário rolar para o início da esquerda, duplicar o conteúdo à esquerda
    if (areaSlides02.scrollLeft <= 0) {
        duplicateContentLeft02();
        // Reajustar a posição da rolagem para manter a continuidade
        areaSlides02.scrollLeft = areaSlides02.scrollLeft + areaSlides02.scrollWidth / 2;
    }
}

// Chamando as funções para duplicar o conteúdo tanto para a direita quanto para a esquerda
duplicateContentRight02();
duplicateContentLeft02();

// Centralizando a barra de rolagem após a duplicação
centerScroll02();

// Adicionar evento de rolagem para verificar a posição
areaSlides02.addEventListener('scroll', checkScroll02);