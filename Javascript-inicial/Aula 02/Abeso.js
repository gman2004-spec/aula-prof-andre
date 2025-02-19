const peso1 = 1.45
const peso2 = 3.56
const peso3 = 2.22
const peso4 = 4.90
const peso5 = 2.80
const peso6 = 5.88

function soma(){
    peso1()
    return "resultado: " + (peso2 + peso3 + peso4 + peso5 + peso6)
}

function peso(){
    console.log("seu peso está médio")
}

const somarComParametros = (p1, p2, p3, p4, p5, p6) => p1 + p2 + p3 + p4 + p5 + p6 

console.log(somarComParametros(5, 5, 5))

const teste = () => "um dos seis"

console.log(teste())

function func(){
    return "um dos seis"
}

const func = () => "um dos seis"