let numero = 0;

numero = prompt('Digite um número:');

const verifiqueSeEprimo = (n) => {
    var primos = true;
    for (let contador = 2; contador < n; contador++) {
        if (n % contador == 0) {
            primos = false;
            return `${n} : Não um número primo!`;
        }

    }

    if (primos == true) {
        return `${n} : É um número primo!`;
    }
}
console.log(verifiqueSeEprimo(numero)); 