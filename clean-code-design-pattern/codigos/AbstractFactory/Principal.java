package AbstractFactory;

public class Principal {
    public static void main(String[] args) {
        EmpresaOnibus empresa = new ConcreteEmpresaOnibus();
        PassagemOnibusUrbano passagemOninusUrbano = empresa.emitirPassagemOnibusUrbano("Marília", "Bauru");
        passagemOninusUrbano.exibirDetalhes();

        PassagemOnibusInterestadual passagemOninusInterestadual = empresa.emitirPassagemOnibusInterestadual("Marília", "Bauru");
        passagemOninusInterestadual.exibirDetalhes();
    }
}
