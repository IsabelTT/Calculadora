class Calculadora {
    constructor() {
        this.resultado = 0;
    }

    sumar(a, b) {
        this.resultado = a + b;
        this.revisarNumero(this.resultado);
        return this.resultado;
    }

    restar(a, b) {
        this.resultado = a - b;
        this.revisarNumero(this.resultado);
        return this.resultado;
    }

    multiplicar(a, b) {
        this.resultado = a * b;
        this.revisarNumero(this.resultado);
        return this.resultado;
    }

    dividir(a, b) {
        this.resultado = a / b;
        this.revisarNumero(this.resultado);
        return this.resultado;
    }

    revisarNumero(resultado) {
        if(resultado === parseInt(resultado)) {
            return;
        } else {
            this.resultado = resultado.toFixed(2);
            return;
        }
    }
}
