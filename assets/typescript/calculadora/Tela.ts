export default class Tela {

    constructor(
        private elementoValor: HTMLDivElement | null = document.querySelector("#values")
    ) {
        this.valor = "0"
    }

    private valorValido = (valor: string): boolean =>  valor.toString().length < 12 && Number.isFinite(+valor)

    set valor(valor: string) {
        this.elementoValor && (this.elementoValor.innerHTML = this.valorValido(valor) ? valor.toString().replace(".", ",") : "Erro")
    }

    get valor(): string {
        return this.elementoValor ? this.elementoValor.innerHTML : "0"
    }
}
