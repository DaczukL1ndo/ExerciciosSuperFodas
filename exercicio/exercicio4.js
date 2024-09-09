function calcularIdadeDetalhada(totalDeDias) {

    if (totalDeDias < 0 || !Number.isInteger(totalDeDias)) {
        console.log("O total de dias deve ser um número inteiro e não-negativo.");
        return;
    }

    const diasPorAno = 365;
    const diasPorMes = 30;

    let anosCalculados = Math.floor(totalDeDias / diasPorAno);
    let diasRestantesDoAno = totalDeDias % diasPorAno;
    let mesesCalculados = Math.floor(diasRestantesDoAno / diasPorMes);
    let diasRestantesDoMes = diasRestantesDoAno % diasPorMes;

    console.log(`A idade expressa em anos, meses e dias é: ${anosCalculados} anos, ${mesesCalculados} meses e ${diasRestantesDoMes} dias.`);
}

let totalDeDias = 9500; // Exemplo de idade em dias

calcularIdadeDetalhada(totalDeDias);