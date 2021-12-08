export default class DataHora {
    constructor(
        private elementoData: HTMLDivElement | null = document.querySelector("#datetime > div:nth-child(2)"),
        private elementoHora: HTMLTimeElement | null = document.querySelector("#datetime time")
    ) {
        this.renderizar()
        setInterval(() => this.renderizar(), 1000)
    }

    private renderizar(): void {

        const dataAtual = new Date()

        const dia = dataAtual.getDate()

        const mes = dataAtual.toLocaleDateString("pt-BR", {
            month: "long"
        })

        const ano = dataAtual.getFullYear()

        const hora = dataAtual.getHours()

        const minuto = dataAtual.getMinutes().toString().padStart(2, "0")

        const doisPontos = dataAtual.getSeconds() % 2 === 0 ? ":" : " "

        this.data = `${dia} ${mes} ${ano}`
        this.hora = `${hora}${doisPontos}${minuto}`

    }

    set data(conteudo: string) {
        this.elementoData && (this.elementoData.innerHTML = conteudo)
    }

    set hora(conteudo: string) {
        this.elementoHora && (this.elementoHora.innerHTML = conteudo)
    }
}
