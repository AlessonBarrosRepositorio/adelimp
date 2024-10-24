

document.addEventListener('DOMContentLoaded', function() {
    cards02();


});



function cards02() {
    var containerEventos = document.getElementById('areaSlideQuemSomos');
    if (containerEventos) {
        containerEventos.innerHTML = `
  
                    <div class="carta" id="carta01">
                        <img src="https://live.staticflickr.com/65535/54049000212_d59c306347_m.jpg" alt="" class="imgCarta">
                        <div class="h2Carta">
                            <h2>
                                Redes de Proteção para <br>Janelas e Outros
                            </h2>
                        </div>
                    </div>
                    <div class="carta">
                        <img src="https://live.staticflickr.com/65535/54050269265_f40490a457_m.jpg" alt="" class="imgCarta">
                        <div class="h2Carta">
                            <h2>
                                Telas Mosquiteiro para <br>Janelas e Portas
                            </h2>
                        </div>

                    </div>
                    <div class="carta">
                        <img src="https://live.staticflickr.com/65535/54040411304_4c7c802ba3_m.jpg" alt="" class="imgCarta">
                        <div class="h2Carta">
                            <h2>
                                Redes para Quadras <br>e Piscinas
                            </h2>
                        </div>
                    </div>
                    <div class="carta">
                        <img src="https://live.staticflickr.com/65535/54049661141_4a1d4c6daf_m.jpg" alt="" class="imgCarta">
                        <div class="h2Carta">
                            <h2>
                                Mão de Obra Especializada
                            </h2>
                        </div>
                    </div>                   
                            
        `;
    }
}