package AbstractFactory;

public abstract class PassagemOnibusUrbano {

    private String origem;
    private String destino;

    public abstract void exibirDetalhes();

    public PassagemOnibusUrbano(String origem, String destino) {
        this.origem = origem;
        this.destino = destino;
    }

    public String getOrigem() {
        return origem;
    }

    public void setOrigem(String origem) {
        this.origem = origem;
    }

    public String getDestino() {
        return destino;
    }

    public void setDestino(String destino) {
        this.destino = destino;
    }
}
