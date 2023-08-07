const elementoParaInserirCertificados = document.getElementById('certificados__container')

function exibirCertificadosNaTela(listaDeCertifidados) {
    
    elementoParaInserirCertificados.innerHTML = ''
    listaDeCertifidados.forEach(certificado => {
        
        elementoParaInserirCertificados.innerHTML += `
        <div class="certificado">
        <img class="certificado__imagem" src="${certificado.imagem}" alt="${certificado.alt}"/>   
        </div>`
      
    })
}

