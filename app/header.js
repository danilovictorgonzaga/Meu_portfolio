let icones = document.getElementById('icone-menu')

icones.addEventListener('click', trocaDeIcones)

function trocaDeIcones() {
    var icone = icones.attributes.src.nodeValue

    let iconeCorreto = icone == 'img/icones/menu.png'
        ? 'img/icones/menu-sair.png'
        : 'img/icones/menu.png'
    
    icones.src = iconeCorreto
    return 
}


