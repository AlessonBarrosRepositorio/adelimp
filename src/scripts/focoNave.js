function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if ('scrollBehavior' in document.documentElement.style) {
        // Suporte a smooth scroll
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        // Fallback: scroll instantâneo
        element.scrollIntoView();
    }
}

// Atualize suas funções:
function quemSou() { scrollToSection('quemSomos'); }
function servico() { scrollToSection('servico'); }
function trabalhos() { scrollToSection('trabalhos'); }
function home() { scrollToSection('home'); }
function perguntasRespostas(){scrollToSection('perguntasRespostas')}