let certificados = []
const andpointDaAPI = 'certificados.json'
getBuscarCertificadosDaAPI()

async function getBuscarCertificadosDaAPI() {
    const res = await fetch(andpointDaAPI)
    certificados = await res.json()
    
    exibirCertificadosNaTela(certificados)
}