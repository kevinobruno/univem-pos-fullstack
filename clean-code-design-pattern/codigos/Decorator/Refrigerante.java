package Decorator;

public class Refrigerante extends CoquetelDecorator {
    public Refrigerante(Coquetel coquetel) {
        super(coquetel);
        this.nome = "Refrigerante";
        this.preco = 1.1;
    }
}
