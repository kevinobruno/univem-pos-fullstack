package AbstractFactory;

public class ConcretePassagemOnibusInterestadual extends PassagemOnibusInterestadual {

    public ConcretePassagemOnibusInterestadual(String origem, String destino) {
        super(origem, destino);
    }

    @Override
    public void exibirDetalhes() {
        System.out.println("Passagem de ônibus interestadual: " + this.getOrigem() + " para " + this.getDestino());
    }
}
