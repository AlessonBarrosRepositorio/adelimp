<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adelimp Telas e Redes</title>
    <script src="./src/scripts/telaAjustavel.js" defer></script>
    <link rel="stylesheet" href="./src/styles/reset.css">
    <link id="estiloPrincipal" rel="stylesheet" href="./src/styles/estiloPrincipal.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <link id="cardCSS" rel="stylesheet" href="src/styles/cards/card.css">

    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">

    <script src="./src/scripts/cardScript/cacheStorage.js" defer></script>
    
    <link rel="stylesheet" href="./src/styles/animation/animation.css">

    <script src="./src/scripts/animation/animation.js" defer></script>


    <script src="./src/scripts/focoNave.js" defer></script>
    
    <script src="./src/scripts/cardScript/cardsCadastrados.js"></script>
    <script src="./src/scripts/cardScript/btnCardNav.js" defer></script>
    <script src="./src/scripts/cardScript/multiplicarSlider.js" defer></script>
    
</head>

<body>
    <div class="areaConteudo">
        <div id="home" class="areaConteudo01 bloco bloco02">
            <div class="logo01 absolute 02">
                <img src="https://live.staticflickr.com/65535/54039125842_fa1e78e187_m.jpg" alt="" srcset="">
            </div>
            <div class="textoArea01 absolute"></div>
            <nav class="nave absolute somb centro 02">
                <div class="navArea centro">                    
                    <div class="btnNav01 centro somb" onclick="quemSou()" ><b onclick="quemSou()">Quem Sou</b></div>
                    <div class="btnNav01 centro somb" onclick="servico()"><b onclick="servico()">Serviços</b></div>
                    <div class="btnNav01 centro somb" onclick="objetivo()"><b onclick="objetivo()">Objetivo</b></div>
                    <div class="btnNav01 centro somb what01 textSomb"><a href="https://wa.me/+5521981377922" target="_blank"class="centro">Fale Conosco</a></div>
                </div>                
            </nav>
            <img src="https://live.staticflickr.com/65535/54040292820_ef08e4b903_b.jpg" alt="" srcset="">
        </div>
        <div id="servico" class="areaConteudo03 centro bloco bloco02">
            <div class="btnHome somb centro " onclick="home()"><img src="https://res.cloudinary.com/dotl7tsgw/image/upload/v1725924157/Sites/PericiaCynthia/icones/casaBranca.png" alt=""></div>            
            <a href="https://wa.me/+5521981377922" class="btnWhats somb " target="_blank"><img src="https://res.cloudinary.com/dotl7tsgw/image/upload/v1725924249/Sites/PericiaCynthia/icones/whatsBranco.png" alt=""></a>
            <div class="topArea03 centro"><h1>Nossos Serviços:</h1></div>
            
            <div class="slide 02">
                <div class="areaSlide" id="areaSlide">
                                     
                    
                </div>
                <div class="areaEsfumadaEsquerda"></div>
                <div class="areaEsfumadaDireita"></div>
                <button class="scroll-btn scroll-left-btn" id="scrollLeftBtn">&lt;</button>
                <button class="scroll-btn scroll-right-btn" id="scrollRightBtn">&gt;</button>
            </div>
            <div class="bottomArea03 centro">
                <h2>Solicite um Orçamento, atendimento 24 horas:</h2>
                <a href="https://wa.me/+5521981377922" class="btnOrcamento centro somb textSomb" target="_blank">Fale Conosco</a>
            </div>
        </div>


    </div>
</body>

</html>