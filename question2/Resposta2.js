function verificarFibonacci() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultadoElemento = document.getElementById('resultado');

    if (isNaN(numero) || numero < 0) {
        resultadoElemento.innerHTML = `<p style="color: red;">Por favor, insira um número válido.</p>`;
        return;
    }

    function isFibonacci(num) {
        let a = 0, b = 1;
        if (num === a || num === b) return true;
        
        let next = a + b;
        while (next <= num) {
            if (next === num) return true;
            a = b;
            b = next;
            next = a + b;
        }
        return false;
    }

    const pertence = isFibonacci(numero);
    
    if (pertence) {
        resultadoElemento.innerHTML = `<p style="color: green;">${numero} pertence à sequência de Fibonacci.</p>`;
    } else {
        resultadoElemento.innerHTML = `<p style="color: red;">${numero} não pertence à sequência de Fibonacci.</p>`;
    }
}
