function calcularCustoFinal(custoDeFabrica) {

    if (custoDeFabrica < 0 || !Number.isFinite(custoDeFabrica)) {
        console.log("O custo de fábrica deve ser um número positivo.");
        return;
    }

    const percentualDistribuidor = 0.28;
    const percentualImpostos = 0.45;

    let custoDistribuidor = custoDeFabrica * percentualDistribuidor;
    let custoImpostos = custoDeFabrica * percentualImpostos;

    let custoTotalConsumidor = custoDeFabrica + custoDistribuidor + custoImpostos;

    console.log(`O custo ao consumidor é: R$ ${custoTotalConsumidor.toFixed(2)}`);
}

let custoDeFabrica = 30000; // Exemplo de custo de fábrica em reais

calcularCustoFinal(custoDeFabrica);