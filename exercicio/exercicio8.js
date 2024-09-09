function resolverSistemaLinear(coefA, coefB, constante1, coefC, coefD, constante2) {

    const denominador = (coefA * coefD) - (coefB * coefC);

    if (denominador === 0) {
        console.log("O sistema não tem solução única (denominador é zero).");
        return;
    }

    const valorX = (constante1 * coefD - coefB * constante2) / denominador;
    const valorY = (coefA * constante2 - constante1 * coefC) / denominador;

    console.log(`O valor de x é: ${valorX.toFixed(2)}`);
    console.log(`O valor de y é: ${valorY.toFixed(2)}`);
}

let coefA = 2;
let coefB = 3;
let constante1 = 7;
let coefC = 1;
let coefD = 4;
let constante2 = 10;

resolverSistemaLinear(coefA, coefB, constante1, coefC, coefD, constante2);