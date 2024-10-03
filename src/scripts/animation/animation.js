const meuObservador = new  IntersectionObserver((entradas) =>{
    //console.log(entrada)
    entradas.forEach((entrada) =>{
        if(entrada.isIntersecting){
            entrada.target.classList.add('show');
            //entrada.isIntersecting.remove('hidden');
        }else{
            entrada.target.classList.remove('show')
            //entrada.target.classList.add('hidden')
        }
    })
});


const elemento01 = document.querySelectorAll('.hidden');

elemento01.forEach((elemento001) => meuObservador.observe(elemento001))

//meuObservador.observe(fundo01);

const meuObservador02 = new  IntersectionObserver((entradas02) =>{
    //console.log(entrada)
    entradas02.forEach((entrada02) =>{
        if(entrada02.isIntersecting){
            entrada02.target.classList.add('show02');
            //entrada.isIntersecting.remove('hidden02');
        }else{
            entrada02.target.classList.remove('show02')
            //entrada.target.classList.add('hidden02')
        }
    })
});

const elemento02 = document.querySelectorAll('.hidden02');

elemento02.forEach((elemento002) => meuObservador02.observe(elemento002))