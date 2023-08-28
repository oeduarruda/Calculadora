var reiniciar = false
var operacaoAtual
function valorDisplay(btnClicado) {
    if (reiniciar == true) {
        document.getElementById('display').value = '0';
    }
    switch (btnClicado) {
        case "soma":
            document.getElementById('historico').value = document.getElementById('display').value
            reiniciar = true;
            operacaoAtual = "soma";
            break;
        case "subtracao":
            document.getElementById('historico').value = document.getElementById('display').value
            reiniciar = true;
            operacaoAtual = "subtracao";
            break;
        case "multiplicacao":
            document.getElementById('historico').value = document.getElementById('display').value
            reiniciar = true;
            operacaoAtual = "multiplicacao";
            break;
        case "divisao":
            document.getElementById('historico').value = document.getElementById('display').value
            reiniciar = true;
            operacaoAtual = "divisao";
            break;
        default:
            if (document.getElementById('display').value == '0' && btnClicado == ',') {
                document.getElementById('display').value = '0' + btnClicado
                reiniciar = false;
            } else if (document.getElementById('display').value == '0') {
                document.getElementById('display').value = btnClicado
                reiniciar = false;
            } else if (document.getElementById('display').value.includes(',') && btnClicado == ',') {
                document.getElementById('display').value = document.getElementById('display').value;
                reiniciar = false;
            } else if (btnClicado != "soma" && btnClicado != "subtracao" && btnClicado != "divisao" && btnClicado != "multiplicacao") {
                document.getElementById('display').value = document.getElementById('display').value + btnClicado;
                reiniciar = false;
            }
        
            break;
    }


}

function limpeza() {
    document.getElementById('display').value = '0';
    document.getElementById('historico').value = '0';
    reiniciar = false;
    operacaoAtual = undefined;
}

function resultado() {
    if (operacaoAtual == "soma") {
        document.getElementById('display').value = parseInt(document.getElementById('historico').value) + parseInt(document.getElementById('display').value)
    }
    if (operacaoAtual == "subtracao") {
        document.getElementById('display').value = parseInt(document.getElementById('historico').value) - parseInt(document.getElementById('display').value)
    }
    if (operacaoAtual == "multiplicacao") {
        document.getElementById('display').value = parseInt(document.getElementById('historico').value) * parseInt(document.getElementById('display').value)
    }
    if (operacaoAtual == "divisao") {
        document.getElementById('display').value = parseInt(document.getElementById('historico').value) / parseInt(document.getElementById('display').value)
    }
}












































function soma(valorDigitado, valorGuardado) {
    return valorDigitado + valorGuardado
}