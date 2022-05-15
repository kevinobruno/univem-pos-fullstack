package FactoryMethod;

public class Principal {
    public static void main(String[] args) {
        Empresa empresaOnibusUrbano = new EmpresaOnibusUrbano();
        Passagem passagemUrbana = empresaOnibusUrbano.emitirPassagem("Marília", "Bauru");
        passagemUrbana.exibirDetalhes();
    }
}
