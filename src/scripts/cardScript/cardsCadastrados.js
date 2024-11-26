
document.addEventListener('DOMContentLoaded', function() {
    cards();

});



function cards() {
    var containerEventos = document.getElementById('areaSlide');
    if (containerEventos) {
        containerEventos.innerHTML = `
  
                    <div class="carta" id="carta01">
                        <img src="https://live.staticflickr.com/65535/54049000212_d59c306347_m.jpg" alt="imagem de um gato na janela com tela de proteção" class="imgCarta">
                        <div class="h2Carta">
                            <h2>
                                Redes de Proteção para <br>Janelas e Outros
                            </h2>
                        </div>
                    </div>
                    <div class="carta">
                        <img src="https://live.staticflickr.com/65535/54165671906_8fdc301f64_m.jpg" alt="imagem de um quarto com uma cama e mosqueteiro" class="imgCarta">
                        <div class="h2Carta">
                            <h2>
                                Telas Mosquiteiro para <br>Janelas e Portas
                            </h2>
                        </div>

                    </div>
                    <div class="carta">
                        <img src="https://live.staticflickr.com/65535/54040411304_4c7c802ba3_m.jpg" alt="imagem de uma quadra de esportes com grade de proteção verde" class="imgCarta">
                        <div class="h2Carta">
                            <h2>
                                Redes para Quadras <br>e Piscinas
                            </h2>
                        </div>
                    </div>
                    <div class="carta">
                        <img src="https://live.staticflickr.com/65535/54049661141_4a1d4c6daf_m.jpg" alt="imagem de um especialista em telas e rede conversando com seu subordinado" class="imgCarta">
                        <div class="h2Carta">
                            <h2>
                                Mão de Obra Especializada
                            </h2>
                        </div>

                    </div>
                    <div class="carta">
                        <img src="https://live.staticflickr.com/65535/54050135000_ce85b90da4_m.jpg" alt="imagem de duas mãos apertadas pois estão fazendo um negocio confiavel sobre telas e redes de proteção" class="imgCarta">
                        <div class="h2Carta">
                            <h2>
                                Serviços com Garantia
                            </h2>
                        </div>

                    </div>

                    <div class="carta">
                        <a target="_blank" class="imgCarta"title="Esse link te enviará para a localização no google maps que lhe mostrará esse endereço aqui: Endereço: Rua Barata Ribeiro 692, Lj 21 e 23 - Copacabana" href="https://maps.app.goo.gl/puM3S3Rue1uzUD6t7"><img src="https://live.staticflickr.com/65535/54050149855_15da1fbf53_m.jpg" alt=" esse é a imagem da localização no google maps" class="imgCarta"></a>
                        <div class="h2Carta">
                            <h2>
                                <a target="_blank" class="imgCarta" title="Esse link te enviará para a localização no google maps que lhe mostrará esse endereço aqui: Endereço: Rua Barata Ribeiro 692, Lj 21 e 23 - Copacabana" href="https://maps.app.goo.gl/puM3S3Rue1uzUD6t7">Nos encontre Aqui</a>
                            </h2>
                        </div>
                    </div>
                    <div class="carta instagram-embed">
                       <a  target="_blank" title="esse é o link para a rede social instagram da loja de telas e redes de proteção adelimp" href="https://www.instagram.com/adelimprj?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" class="imgCarta"><img src="https://live.staticflickr.com/65535/54049024762_23b728ba0b_m.jpg" alt="imagem do perfil da telas e redes de proteção adelimp" class="imgCarta"></a>
                        <div class="h2Carta">
                            <h2>
                                <a  target="_blank" title="esse é o link para a rede social instagram da loja de telas e redes de proteção adelimp"  href="https://www.instagram.com/adelimprj?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Nos siga no instagram</a>
                            </h2>
                        </div>
                    </div>
                            
        `;
    }
}