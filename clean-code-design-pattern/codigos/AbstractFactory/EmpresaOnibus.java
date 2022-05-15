package AbstractFactory;

public abstract class EmpresaOnibus {

    public abstract PassagemOnibusUrbano emitirPassagemOnibusUrbano(String origem, String destino);
    public abstract PassagemOnibusInterestadual emitirPassagemOnibusInterestadual(String origem, String destino);

}
