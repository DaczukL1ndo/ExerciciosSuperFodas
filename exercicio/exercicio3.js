function calcularIdadeEmDias(anosDeVida, mesesDeVida, diasDeVida) {

    if (anosDeVida < 0 || mesesDeVida < 0 || diasDeVida < 0 || !Number.isInteger(anosDeVida) || !Number.isInteger(mesesDeVida) || !Number.isInteger(diasDeVida)) {
        console.log("Os valores devem ser inteiros e não-negativos.");
        return;
    }

    const diasPorAno = 365;
    const diasPorMes = 30;

    let idadeTotalEmDias = (anosDeVida * diasPorAno) + (mesesDeVida * diasPorMes) + diasDeVida;

    console.log("A idade expressa em dias é:", idadeTotalEmDias);
}

// Exemplo de data :>
let anosDeVida = 25;
let mesesDeVida = 6;
let diasDeVida = 15;

calcularIdadeEmDias(anosDeVida, mesesDeVida, diasDeVida);