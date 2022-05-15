package FactoryMethod;

public class PassagemOnibusInterestadual extends Passagem {

    public PassagemOnibusInterestadual(String origem, String destino) {
        super(origem, destino);
    }

    @Override
    public void exibirDetalhes() {
        System.out.println("Passagem de ônibus interestadual: " + this.getOrigem() + " para " + this.getDestino());
    }
}
