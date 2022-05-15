package FactoryMethod;

public class PassagemOnibusUrbano extends Passagem {

    public PassagemOnibusUrbano(String origem, String destino) {
        super(origem, destino);
    }

    @Override
    public void exibirDetalhes() {
        System.out.println("Passagem de ônibus urbano: " + this.getOrigem() + " para " + this.getDestino());
    }
}
