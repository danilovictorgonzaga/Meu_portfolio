const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarCertificados))

function filtrarCertificados() {
    var elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    
    botoes.forEach(botao => {
        botao.classList.remove('ligado')
    })
    
    elementoBtn.classList.add('ligado')
    

    let certificadosFiltrados = categoria == 'todos'
        ? todosCertificados()
        : filtrarPorCategoria(categoria)

         
    exibirCertificadosNaTela(certificadosFiltrados)
}

function filtrarPorCategoria(categoria) {
    return certificados.filter(certificado => certificado.categoria == categoria) 
    
}

function todosCertificados() {
    return certificados
}