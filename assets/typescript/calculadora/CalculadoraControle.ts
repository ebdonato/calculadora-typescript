import DataHora from "./DataHora.js"
import Operacao from "./Operacao.js"
import Tela from "./Tela.js"

export default class CalculadoraControle {
    private tela = new Tela()

    private operacao = new Operacao(
        {
            quandoCalculado: (resultado: string) => this.tela.valor = resultado
        }
    )

    constructor() {
        new DataHora()

        this.adicionarEventosBotoes()
    }

    private adicionarEventosBotoes(): void {
        document.querySelectorAll("#teclado button").forEach(elemento => {
            elemento.addEventListener("click", (evento: Event): void  => {
                const target = <HTMLButtonElement>evento.target

                switch (target.id) {

                case "zero":
                case "um":
                case "dois":
                case "tres":
                case "quatro":
                case "cinco":
                case "seis":
                case "sete":
                case "oito":
                case "nove":
                    this.adicionarNumero(target.innerHTML)
                    break

                case "adicao":
                case "subtracao":
                case "divisao":
                case "multiplicacao":
                    this.adicionarOperador(target.innerHTML)
                    break

                case "ponto":

                    break

                case "limpar":

                    break

                case "desfazer":

                    break

                case "porcentagem":

                    break

                case "igual":
                    this.calcular()
                    break
                }

            })
        })
    }

    calcular(): void {
        this.operacao.calcular()
    }

    adicionarOperacao(tecla: string): void {
        this.operacao.adicionar(tecla)

        console.log(this.operacao.length)
    }

    adicionarNumero(tecla: string): void {
        if (isNaN(Number(this.operacao.ultimaPosicao))) {
            this.adicionarOperacao(tecla)
        } else {
            tecla = Number(this.operacao.ultimaPosicao + tecla).toString()

            this.operacao.ultimaPosicao = tecla
        }

        this.tela.valor = tecla
    }

    adicionarOperador(operador: string): void {
        if (isNaN(Number(this.operacao.ultimaPosicao))) {
            this.operacao.ultimaPosicao = operador
        } else {
            !this.operacao.length && this.adicionarOperacao("0")

            this.adicionarOperacao(operador)

        }

    }
}
