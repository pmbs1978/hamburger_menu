(function (){
    // se o js funcionar faz a troca de class para ativar o js no menu e nos slides
    var $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');

    // cria uma função construtora para o menu
    var menu = new Menu({
        container: '.menu',
        toggleBtn: '.btnMenu',
        widhtEnabled: 1024
    })
})()