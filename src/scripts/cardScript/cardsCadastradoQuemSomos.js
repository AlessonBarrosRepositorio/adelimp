

document.addEventListener('DOMContentLoaded', function() {
    cards02();


});



function cards02() {
    var containerEventos = document.getElementById('areaSlideQuemSomos');
    if (containerEventos) {
        containerEventos.innerHTML = `
  
                    <div class="carta carta02" id="carta01">
                        <img src="https://live.staticflickr.com/65535/54121025333_9dcc699236_z.jpg" alt="" class="imgCarta">
                        
                        <div class="h2Carta">
                            <h2>
                                Venha Aqui nos conhecer
                            </h2>
                        </div>
                    </div>
                    <div class="carta carta02">
                        <img src="https://live.staticflickr.com/65535/54119119675_622619983f_z.jpg" alt="" class="imgCarta">
                        
                        <div class="h2Carta">
                            <h2>
                                Telas Mosquiteiro para <br>Janelas e Portas
                            </h2>
                    </div>

                    </div>
                    <div class="carta carta02">
                        <img src="https://live.staticflickr.com/65535/54118993599_8fe04e047a_z.jpg" alt="" class="imgCarta">
                        
                        <div class="h2Carta">
                            <h2>
                                Telas Mosquiteiro para <br>Janelas e Portas
                            </h2>
                        </div>

                    </div>
                    <div class="carta carta02">
                        <img src="https://live.staticflickr.com/65535/54117799402_c80f54e0c0_z.jpg" alt="" class="imgCarta">
                        
                        <div class="h2Carta">
                            <h2>
                                Redes para Quadras <br>e Piscinas
                            </h2>
                        </div>
                    </div>
                    <div class="carta carta02">
                        <img src="https://live.staticflickr.com/65535/54118931103_5cae587153_z.jpg" alt="" class="imgCarta">
                        
                        <div class="h2Carta">
                            <h2>
                                Mão de Obra Especializada
                            </h2>
                        </div>
                    </div>
                    <div class="carta carta02">
                        <img src="https://live.staticflickr.com/65535/54118993604_110b5ddfd3_z.jpg" alt="" class="imgCarta">
                        
                        <div class="h2Carta">
                            <h2>
                                Mão de Obra Especializada
                            </h2>
                        </div>
                    </div>                      
                            
        `;
    }
}