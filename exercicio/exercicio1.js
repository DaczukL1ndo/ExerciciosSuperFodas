function calcularDistancia(pontoA, pontoB) {

    let dx = pontoB.x - pontoA.x;
    let dy = pontoB.y - pontoA.y;


    let distanciaQuadrada = dx * dx + dy * dy;


    return Math.sqrt(distanciaQuadrada);
}

// Exemplo
let pontoA = { x: 1, y: 2 };
let pontoB = { x: 9, y: 6 };

console.log("A distância entre os pontos é:", calcularDistancia(pontoA, pontoB));