// jQuery
$(function(){
    // Obtengo listado de links en menu para que en movil cuando se haga click en cada uno se colapse el contenedor
    var menuToggler = $('#navToggler');
    var menuWrapper = $('#navbarViajesChile')
    var menuLinks = $('.navbar-nav li a')

    menuLinks.each(function(){
        $(this).click(function(){
            menuToggler.addClass('collapsed')
            menuWrapper.removeClass('show')
        })
    })
})