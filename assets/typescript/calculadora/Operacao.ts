interface IQuandoCalculado {
    (resultado: string):  void
}

interface IOperacaoOpcoes {
    quandoCalculado: IQuandoCalculado
}

export default class Operacao {

    private quandoCalculado: IQuandoCalculado

    private operacao: string[] = []

    constructor(opcoes: IOperacaoOpcoes) {
        this.quandoCalculado = opcoes.quandoCalculado
    }

    adicionar(valor: string): number {
        this.operacao.push(valor)

        console.log(this.operacao)

        return this.length
    }

    private obterResultado(): string {

        let resultado = "0"

        try {
            resultado = (eval(this.operacao.join(""))).toString()
        } catch (e) {
            resultado = "ERRO"
        }

        return resultado

    }

    calcular(): void {

        let resultado = this.obterResultado()

        if (resultado.length > 12) {
            resultado = resultado.substr(0, 12)
        }

        this.operacao = [resultado]

        this.quandoCalculado(resultado)

    }

    get ultimaPosicao(): string {
        return this.operacao.length ? this.operacao[this.operacao.length - 1] : "0"
    }

    set ultimaPosicao(valor: string) {
        const ultimoIndex = this.operacao.length ? this.operacao.length - 1 : 0
        this.operacao[ultimoIndex] = valor
    }

    //TODO é necessário?
    get length(): number {
        return this.operacao.length
    }

}
