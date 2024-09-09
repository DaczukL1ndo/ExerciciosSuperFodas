function converterSegundosParaTempo(totalSegundos) {

    if (totalSegundos < 0 || !Number.isInteger(totalSegundos)) {
        console.log("O tempo deve ser um número inteiro e não-negativo.");
        return;
    }

    const segundosPorHora = 3600;
    const segundosPorMinuto = 60;

    let horasCalculadas = Math.floor(totalSegundos / segundosPorHora);
    let segundosRestantesDasHoras = totalSegundos % segundosPorHora;
    let minutosCalculados = Math.floor(segundosRestantesDasHoras / segundosPorMinuto);
    let segundosRestantes = segundosRestantesDasHoras % segundosPorMinuto;

    console.log(`O tempo é: ${horasCalculadas} horas, ${minutosCalculados} minutos e ${segundosRestantes} segundos.`);
}

let totalSegundos = 3665;

converterSegundosParaTempo(totalSegundos);