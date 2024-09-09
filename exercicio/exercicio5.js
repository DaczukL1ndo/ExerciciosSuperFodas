function calcularMediaPonderadaNota(nota1, nota2, nota3) {

    const pesoNota1 = 2;
    const pesoNota2 = 3;
    const pesoNota3 = 5;

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || !Number.isFinite(nota1) || !Number.isFinite(nota2) || !Number.isFinite(nota3)) {
        console.log("As notas devem ser números entre 0 e 10.");
        return;
    }

    let somaPesos = pesoNota1 + pesoNota2 + pesoNota3;
    let mediaPonderada = (nota1 * pesoNota1 + nota2 * pesoNota2 + nota3 * pesoNota3) / somaPesos;

    console.log("A média ponderada é:", mediaPonderada.toFixed(2));
}

let nota1 = 7.5;
let nota2 = 8.0;
let nota3 = 9.0;

calcularMediaPonderadaNota(nota1, nota2, nota3);