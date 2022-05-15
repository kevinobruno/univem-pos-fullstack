package AbstractFactory;

public class ConcretePassagemOnibusUrbano extends PassagemOnibusUrbano {

    public ConcretePassagemOnibusUrbano(String origem, String destino) {
        super(origem, destino);
    }

    @Override
    public void exibirDetalhes() {
        System.out.println("Passagem de ônibus urbano: " + this.getOrigem() + " para " + this.getDestino());
    }
}
