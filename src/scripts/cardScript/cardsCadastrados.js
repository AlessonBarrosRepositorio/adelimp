
document.addEventListener('DOMContentLoaded', function() {
    cards();

});



function cards() {
    var containerEventos = document.getElementById('areaSlide');
    if (containerEventos) {
        containerEventos.innerHTML = `
  
                    <div class="carta" id="carta01">
                        <img src="https://res.cloudinary.com/dotl7tsgw/image/upload/v1725882200/teste-link/xd90p4eelwkdcdmbxxpg.jpg" alt="" class="imgCarta">
                        <h2 class="h2Carta">
                            Redes de Proteção para Janelas e Outros
                        </h2>
                    </div>
                    <div class="carta">
                        <img src="https://res.cloudinary.com/dotl7tsgw/image/upload/v1725882202/teste-link/c0zdhg54tfos2yquwbow.jpg" alt="" class="imgCarta">
                        <h2 class="h2Carta">
                            Telas Mosquiteiro para Janelas e Portas
                        </h2>
                    </div>
                    <div class="carta">
                        <img src="https://live.staticflickr.com/65535/54040411304_4c7c802ba3_m.jpg" alt="" class="imgCarta">
                        <h2 class="h2Carta">
                            Redes para Quadras e Piscinas
                        </h2>
                    </div>
                    <div class="carta">
                        <img src="https://res.cloudinary.com/dotl7tsgw/image/upload/v1725885602/teste-link/eiumwtvldsdxbj0xenud.jpg" alt="" class="imgCarta">
                        <h2 class="h2Carta">
                            Mão de Obra Especializada
                        </h2>
                    </div>
                    <div class="carta">
                        <img src="https://res.cloudinary.com/dotl7tsgw/image/upload/v1725882201/teste-link/gfiiuqei7eoa6jnzohie.jpg" alt="" class="imgCarta">
                        <h2 class="h2Carta">
                            Serviços com Garantia
                        </h2>
                    </div>

                    <div class="carta">
                        <img src="https://res.cloudinary.com/dotl7tsgw/image/upload/v1725882201/teste-link/pxpjaephtwonwe5oddvx.jpg" alt="" class="imgCarta">
                        <h2 class="h2Carta">
                            Nos encontrem Aqui
                        </h2>
                    </div>
                    <div class="carta">
                        <img src="https://res.cloudinary.com/dotl7tsgw/image/upload/v1725882200/teste-link/ypvev4uhpha7ix8exuao.jpg" alt="" class="imgCarta">
                        <h2 class="h2Carta">
                            Nos siga no instagram
                        </h2>
                    </div>
                            
        `;
    }
}