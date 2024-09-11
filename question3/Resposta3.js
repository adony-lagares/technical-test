fetch('./dados.json')
  .then(response => response.json())
  .then(faturamentoDiario => {
    function calcularEstatisticasFaturamento(faturamento) {

        const diasComFaturamento = faturamento.filter(dia => dia.valor > 0).map(dia => dia.valor);

        const menorValor = Math.min(...diasComFaturamento);

        const maiorValor = Math.max(...diasComFaturamento);

        const mediaMensal = diasComFaturamento.reduce((acc, val) => acc + val, 0) / diasComFaturamento.length;

        const diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > mediaMensal).length;

        return {
            menorValor,
            maiorValor,
            mediaMensal,
            diasAcimaDaMedia
        };
    }

    const resultado = calcularEstatisticasFaturamento(faturamentoDiario);

    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `
      <p><strong>Menor valor de faturamento:</strong> R$ ${resultado.menorValor.toFixed(2)}</p>
      <p><strong>Maior valor de faturamento:</strong> R$ ${resultado.maiorValor.toFixed(2)}</p>
      <p><strong>Média de faturamento (dias com faturamento):</strong> R$ ${resultado.mediaMensal.toFixed(2)}</p>
      <p><strong>Número de dias com faturamento acima da média:</strong> ${resultado.diasAcimaDaMedia}</p>
    `;
  })
  .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
