package FactoryMethod;

public class EmpresaOnibusUrbano extends Empresa {

    @Override
    public Passagem emitirPassagem(String origem, String destino) {
        return new PassagemOnibusUrbano(origem, destino);
    }
}
