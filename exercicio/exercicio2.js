function calcularResultado(x, y, z) {

    if (x <= 0 || y <= 0 || z <= 0) {
        console.log("Todos os números devem ser inteiros e positivos.");
        return;
    }

    // Cálculo do quadrado da soma de x e y
    let resultadoR = Math.pow(x + y, 2);
    // Cálculo do quadrado da soma de y e z
    let resultadoS = Math.pow(y + z, 2);

    // Média dos resultados
    let media = (resultadoR + resultadoS) / 2;

    console.log("O valor da média é:", media);
}

// Exemplo de números 
let x = 2;
let y = 3;
let z = 2;

calcularResultado(x, y, z);