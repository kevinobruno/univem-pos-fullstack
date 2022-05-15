package Decorator;

public class Acucar extends CoquetelDecorator {
    public Acucar(Coquetel coquetel) {
        super(coquetel);
        this.nome = "Acucar";
        this.preco = 1.2;
    }
}
