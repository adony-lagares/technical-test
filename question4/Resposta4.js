function calcularPercentuais(faturamento) {
    const totalFaturamento = Object.values(faturamento).reduce((acc, val) => acc + val, 0);


    const percentuais = {};
    for (const estado in faturamento) {
        const percentual = (faturamento[estado] / totalFaturamento) * 100;
        percentuais[estado] = percentual.toFixed(2);  
    }

    return { totalFaturamento, percentuais };
}

function exibirPercentuais() {
    const faturamentoPorEstado = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53
    };

    const resultado = calcularPercentuais(faturamentoPorEstado);

    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `
        <p><strong>Faturamento total:</strong> R$ ${resultado.totalFaturamento.toFixed(2)}</p>
        <p><strong>Percentual de representação por estado:</strong></p>
        <p>SP: ${resultado.percentuais.SP}%</p>
        <p>RJ: ${resultado.percentuais.RJ}%</p>
        <p>MG: ${resultado.percentuais.MG}%</p>
        <p>ES: ${resultado.percentuais.ES}%</p>
        <p>Outros: ${resultado.percentuais.Outros}%</p>
    `;
}

window.onload = exibirPercentuais;
