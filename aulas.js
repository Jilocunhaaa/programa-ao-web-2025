let operadores = ["adição", "subtração", "multiplicação", "divisão"];
let numA = 2.0;
let numB = 3.14;
let numC; //undefined

function imprimirOperacao(operacao, operando1, operando2, resultado){
    console.log(`Resultado da ${operacao} entre ${operando1} e ${operando2} é ${resultado}`);
}

numC = numA + numB;
//imprimirOperacao(operadores[0], numA, numB, numC);

const vetor = [true, 0.15, "Texto", 1];
//console.log(vetor);

vetor[3] = 3.14;
//console.log(vetor);

/*
    1 2 3
    4 5 6
    7 8 9
 */

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
//console.log(matriz);

function imprimirMatriz(A){
    for(let i = 0; i < A.length; i++){
        let linha = ""
        for(let j = 0; j < A[0].length; j++){
            linha += A[i][j] + "\t";
        }
        console.log(linha);
    }
}

//imprimirMatriz(matriz);


let capitais = {
    DF: "Brasília",
    DDD_DF: 61,
    SP: "São Paulo",
    DDD_SP: 11,
    RJ: "Rio de Janeiro",
    DDD_RJ: 21
};

//console.log(capitais.DF + " - " + capitais.DDD_DF);

function verificarNumeroPar(n){
    if(n % 2 == 0){
        return true;
    }
    return false;
}

let calculadora = {
    somar: (a, b)=>{
        return a + b;
    },
    subtrair: (a, b)=>{
        return a - b;
    },
    multiplicar: (a, b)=>{
        return a * b;
    },
    dividir: (a, b)=>{
        return a / b;
    },
    verificarNumeroPar: verificarNumeroPar
}

console.log( calculadora.verificarNumeroPar(calculadora.somar(1, 2)));
