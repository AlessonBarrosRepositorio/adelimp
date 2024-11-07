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
let orientacaoAtual = window.innerWidth > window.innerHeight ? "paisagem" : "retrato";

function ajustarTamanhoBody() {
    // Obtém a largura e a altura da janela
    let larguraJanela = window.innerWidth;
    let alturaJanela = window.innerHeight;

    // Define a largura e a altura do body no CSS
    document.body.style.width = `${larguraJanela}px`;
    document.body.style.height = `${alturaJanela}px`;

    let linkElement = document.getElementById('estiloPrincipal');
    let cardCss = document.getElementById('cardCSS');
    let galeriaCss = document.getElementById('galeriaCSS');

    // Verifica a orientação da janela e recarrega a página se a orientação mudou
    let novaOrientacao = larguraJanela > alturaJanela ? "paisagem" : "retrato";
    if (novaOrientacao !== orientacaoAtual) {
        orientacaoAtual = novaOrientacao;
        location.reload(); // Recarrega a página
        return; // Sai da função para evitar mais ajustes nesta execução
    }

    // Ajusta o CSS para 'estiloPrincipal'
    if (larguraJanela < alturaJanela) {
        if (!linkElement.href.includes("estiloPrincipalM.css")) {
            linkElement.href = linkElement.href.replace("estiloPrincipal.css", "estiloPrincipalM.css");
        }
    } else {
        if (linkElement.href.includes("estiloPrincipalM.css")) {
            linkElement.href = linkElement.href.replace("estiloPrincipalM.css", "estiloPrincipal.css");
        }
    }

    // Ajusta o CSS para 'card'
    if (larguraJanela < alturaJanela) {
        if (!cardCss.href.includes("cardM.css")) {
            cardCss.href = cardCss.href.replace("card.css", "cardM.css");
        }
    } else {
        if (cardCss.href.includes("cardM.css")) {
            cardCss.href = cardCss.href.replace("cardM.css", "card.css");
        }
    }

    // Ajusta o CSS para 'galeria'
    if (larguraJanela < alturaJanela) {
        if (!galeriaCss.href.includes("galeriaM.css")) {
            galeriaCss.href = galeriaCss.href.replace("galeria.css", "galeriaM.css");
        }
    } else {
        if (galeriaCss.href.includes("galeriaM.css")) {
            galeriaCss.href = galeriaCss.href.replace("galeriaM.css", "galeria.css");
        }
    }
}

// Chama a função ajustarTamanhoBody a cada 0,5 segundo
setInterval(ajustarTamanhoBody, 500);

/*
    // Obtém a largura e a altura da janela
    let larguraJanela = window.innerWidth;
    let alturaJanela = window.innerHeight;
    
    // Função para calcular a diferença percentual entre largura e altura
    function calcularDiferencaPercentual() {
        const diferencaAbsoluta = Math.abs(larguraJanela - alturaJanela);
        const menorDimensao = Math.min(larguraJanela, alturaJanela);
        return (diferencaAbsoluta / menorDimensao) * 100;
    }
    
    // Função principal para ajustar o tamanho do body e aplicar estilos
    function ajustarTamanhoBody() {
        document.body.style.width = `${larguraJanela}px`;
        document.body.style.height = `${alturaJanela}px`;
    
        const linkElement = document.getElementById('estiloPrincipal');
        if (larguraJanela < alturaJanela) {
            if (!linkElement.href.includes("estiloPrincipalM.css")) {
                linkElement.href = linkElement.href.replace("estiloPrincipal.css", "estiloPrincipalM.css");
            }
        } else {
            if (linkElement.href.includes("estiloPrincipalM.css")) {
                linkElement.href = linkElement.href.replace("estiloPrincipalM.css", "estiloPrincipal.css");
            }
        }
    
        const cardCss = document.getElementById('cardCSS');
        if (larguraJanela < alturaJanela) {
            if (!cardCss.href.includes("cardM.css")) {
                cardCss.href = cardCss.href.replace("card.css", "cardM.css");
            }
        } else {
            if (cardCss.href.includes("cardM.css")) {
                cardCss.href = cardCss.href.replace("cardM.css", "card.css");
            }
        }
    
        const galeriaCss = document.getElementById('galeriaCSS');
        if (larguraJanela < alturaJanela) {
            if (!galeriaCss.href.includes("galeriaM.css")) {
                galeriaCss.href = galeriaCss.href.replace("galeria.css", "galeriaM.css");
            }
        } else {
            if (galeriaCss.href.includes("galeriaM.css")) {
                galeriaCss.href = galeriaCss.href.replace("galeriaM.css", "galeria.css");
            }
        }
    }
    
    // Chama a função ao carregar a página
    window.onload = ajustarTamanhoBody;
    
    // Evento de redimensionamento para atualizar as dimensões e verificar a diferença percentual
    window.onresize = () => {
        larguraJanela = window.innerWidth;
        alturaJanela = window.innerHeight;
        // Define a diferença percentual desejada
        const diferencaDesejada = 10; // Pode ajustar para 10, 15, 20, etc.
        const diferencaCalculada = calcularDiferencaPercentual();
    
        // Verifica se a diferença percentual entre largura e altura atinge a diferença desejada
        if (diferencaCalculada > diferencaDesejada) {
            setTimeout(() => {
                window.location.reload();
            }, 500);
        }
    };
    
 */