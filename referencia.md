                    <button id="show-or-hide" class="butaodeOpcoes">
                        <div class="areaTIRA">
                            <div class="tira"></div>
                            <div class="tira"></div>
                            <div class="tira"></div>
                        </div>
                        <div class="opcoes">
                            <div class="controleOpcoes">
                                <link rel="stylesheet" href="css/convenios.css">

                                <div>

                                    @if($usuarioGrupo != null)
                                        <form class="botao" method="post" action="{{ route('welcome') }}">
                                            @csrf
                                            <input class="butao60 sairDaConta" type="submit" name="submitSair" value="Sair">
                                        </form>
                                    @endif

                                    <div>
                                        @if($usuarioGrupo != null)
                                            <p class="fonte30"><a href='/' id='clubeDeBeneficios' class='clubeDeBeneficios-link'>Página principal</a></p>
                                            @if($tipo_id == 1)
                                                <p class="fonte30"><a href='campoDeBusca' id='campoDeBusca' class='campoDeBusca-link'>Usuários e conveniados</a></p>
                                                <p class="fonte30"><a href='convenios' id='buscaConvenios' class='buscaConvenios-link'>Conveniados</a></p>
                                                <p class="fonte30"><a href='conveniados' id='conveniosTitular' class='conveniosTitular-link'>Convênios para titular</a></p>
                                                <p class="fonte30"><a href='usuarios' id='buscaUsuarios' class='buscaUsuarios-link'>Usuários</a></p>
                                                <p class="fonte30"><a href='excluidos' id='excluidos' class='excluidos-link'>Excluídos</a></p>
                                                <p class="fonte30"><a href='edicaoSite' id='edicaoSite' class='edicaoSite-link'>Editar visual do site</a></p>
                                                <p class="fonte30"><a href='favoritados' id='favoritados' class='favoritados-link'>Favoritados</a></p>
                                                <p class="fonte30"><a href='eventos' id='eventos' class='eventos-link'>Eventos</a></p>
                                                <p class="fonte30"><a href='administradorDeAcoes' id='eventos' class='administradorDeAcoes-link'>Administrador de ações</a></p>
                                                <p class="fonte30"><a href='contatoADMinterno' id='contatoADMinterno' class='contatoADMinterno-link'>Contato com o cliente</a></p>
                                            @endif
                                            @if($tipo_id == 2)
                                                <p class="fonte30"><a href='conveniados' id='conveniosTitular' class='conveniosTitular-link'>Conveniados</a></p>
                                                <p class="fonte30"><a href='favoritados' id='favoritados' class='favoritados-link'>Favoritados</a></p>
                                                <p class="fonte30"><a href='eventos' id='eventos' class='eventos-link'>Eventos</a></p>
                                            @endif
                                            @if($tipo_id == 4)
                                                <p class="fonte30"><a href='administradorDeAcoes' id='eventos' class='administradorDeAcoes-link'>Administrador de ações</a></p>
                                            @endif
                                            @if($tipo_id == 4 || $tipo_id == 5)
                                                <p class="fonte30"><a href='campoDeBusca' id='campoDeBusca' class='campoDeBusca-link'>Usuários e conveniados</a></p>
                                                <p class="fonte30"><a href='edicaoSite' id='edicaoSite' class='edicaoSite-link'>Editar visual do site</a></p>
                                            @endif
                                            <p class="fonte30"><a href='/perfil' id='perfil' class='perfil-link'>Perfil</a></p>
                                        @else
                                            <p class="fonte30"><a href='login' id='login' class='login-link'>Login</a></p>
                                        @endif
                                        <!--EM BREVE-->
                                        <!--<p class="fonte30"><a href='suporte' id='suporte' class='suporte-link'>Suporte</a></p>-->
                                    </div>

                                </div>

                            </div>
                        </div>
                    </button>


script:-----------------------

/*var btn = document.querySelector('#show-or-hide');
var container = document.querySelector('.opcoes');

btn.addEventListener('click', function(){
    if(container.style.display ==='block'){
        container.style.display='none';
    }else{
        container.style.display ='block';
    }
});*/
var btn = document.querySelector('#show-or-hide');
var container = document.querySelector('.opcoes');

// Função para verificar se o clique ocorreu dentro ou fora do elemento .opcoes
function isClickInsideElement(event) {
    return container.contains(event.target);
}

// Adicionar um ouvinte de evento de clique ao documento inteiro
document.addEventListener('click', function(event) {
    if (isClickInsideElement(event)) {
        // Clique ocorreu dentro do elemento .opcoes, não faça nada
        return;
    }

    // Clique ocorreu fora do elemento .opcoes, então feche-o
    container.style.display = 'none';
});

btn.addEventListener('click', function(event) {
    // Impedir que o clique no botão seja propagado para o documento
    event.stopPropagation();
    
    if (container.style.display === 'block') {
        container.style.display = 'none';
    } else {
        container.style.display = 'block';
    }
});

// Impedir que o clique dentro do elemento .opcoes se propague para o documento
container.addEventListener('click', function(event) {
    event.stopPropagation();
});
