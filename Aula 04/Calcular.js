function Calcular(id1, id2, respId, operador){
    var num1 = parseFloat(document.getElementById("n1").value)
    var num2 = parseFloat(document.getElementById("n2").value)
    var resultado

    switch (operador) {
            case '+':
                resultado = num1 + num2
            break;
            case '-':
                resultado = num1 - num2
            break;
            case '*':
                resultado = num1 * num2
            break;
            case '/':
                if(num2 !== 0){
                    resultado = num1 / num2
                }else{
                    resultado = "Erro: Divisão por 0"
                }        
            break;
                default: "Operador inválido"
            break;
    }
    document.getElementById(respId).textContent = FormatNumber(resultado)
}

function FormatNumber(resultado){
    if(Number.isInteger(resultado)){
        return resultado
    } else if(resultado !== "Erro: Divisão por 0"){
        return resultado.tofixed(2)
    } else {
        return resultado
    }
}