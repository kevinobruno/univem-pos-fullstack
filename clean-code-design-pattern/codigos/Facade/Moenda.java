package Facade;

public class Moenda {

    private int qtd;

    public Moenda(int qtd) {
        this.qtd = qtd;
    }

    public void moer() {
        for (int i = 0; i < this.qtd; i++) {
            System.out.println("Moenda pronta em " + i + "...");
        }
        System.out.println("Moenda pronta!");
    }
}
