package FactoryMethod;

public class EmpresaOnibusInterestadual extends Empresa {

    @Override
    public Passagem emitirPassagem(String origem, String destino) {
        return new PassagemOnibusInterestadual(origem, destino);
    }
}
