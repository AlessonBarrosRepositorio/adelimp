/*function ajustarTamanhoBody() {
    // Obtém a largura e a altura da janela
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;

    // Define a largura e a altura do body no CSS
    document.body.style.width = `${larguraJanela}px`;
    document.body.style.height = `${alturaJanela}px`;
}

// Chama a função ao carregar a página
window.onload = ajustarTamanhoBody;

// Chama a função sempre que a janela for redimensionada
window.onresize = ajustarTamanhoBody;

*/
function ajustarTamanhoBody() {
    // Obtém a largura e a altura da janela
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;

    // Define a largura e a altura do body no CSS
    document.body.style.width = `${larguraJanela}px`;
    document.body.style.height = `${alturaJanela}px`;

    // Verifica se a largura é menor que a altura e ajusta o CSS
    const linkElement = document.getElementById('estiloPrincipal');
    if (larguraJanela < alturaJanela) {
        // Adiciona "M" ao nome do arquivo se não estiver presente
        if (!linkElement.href.includes("estiloPrincipalM.css")) {
            linkElement.href = linkElement.href.replace("estiloPrincipal.css", "estiloPrincipalM.css");
        }
    } else {
        // Remove "M" do nome do arquivo se estiver presente
        if (linkElement.href.includes("estiloPrincipalM.css")) {
            linkElement.href = linkElement.href.replace("estiloPrincipalM.css", "estiloPrincipal.css");
        }
    }
      //----------------------------------------------------------------------------------------------
        const cardCss = document.getElementById('cardCSS');
        if (larguraJanela < alturaJanela) {
            // Adiciona "M" ao nome do arquivo se não estiver presente
            if (!cardCss.href.includes("cardM.css")) {
                cardCss.href = cardCss.href.replace("card.css", "cardM.css");
            }
        } else {
            // Remove "M" do nome do arquivo se estiver presente
            if (cardCss.href.includes("cardM.css")) {
                cardCss.href = cardCss.href.replace("cardM.css", "card.css");
            }
        }
}

// Chama a função ao carregar a página
window.onload = ajustarTamanhoBody;

// Chama a função sempre que a janela for redimensionada
window.onresize = ajustarTamanhoBody;