// function teste() {
//     alertaGenerico('meu nome é', document.getElementById("nome").value, 'nome ');
//     alertaGenerico('Meu Cep é', document.getElementById("cep").value, 'cep ');
//     alertaGenerico('Minha rua é', document.getElementById("rua").value, 'rua ');
// }

function alertaGenerico(mensagemPadrao, digitado, nomeCampo) {
    if ('' == digitado) {
        alert('o ' + nomeCampo + 'não foi preenchido')
    } else {
        alert(mensagemPadrao + ' ' + digitado)
    }
}

// function habilitaBotao() {
//     const cep = document.getElementById("cep");
//     cep.removeAttribute("disabled");
// }
function habilitarCampo(idCampoAtual, idCampoProximo) {
    var digitado = document.getElementById(idCampoAtual).value
    if (idCampoAtual == "nome") {
        nomedela(document.getElementById('nome').value)
    }

    document.getElementById(idCampoAtual).value = idCampoProximo
    if ('' != digitado) {
        const campo = document.getElementById(idCampoProximo);
        campo.removeAttribute("disabled");
    }
}

function nomedela(nomePessoa) {
    alert(nomePessoa)
}