package AbstractFactory;

public class ConcreteEmpresaOnibus extends EmpresaOnibus {

    @Override
    public PassagemOnibusUrbano emitirPassagemOnibusUrbano(String origem, String destino) {
        return new ConcretePassagemOnibusUrbano(origem, destino);
    }

    @Override
    public PassagemOnibusInterestadual emitirPassagemOnibusInterestadual(String origem, String destino) {
        return new ConcretePassagemOnibusInterestadual(origem, destino);
    }
}
