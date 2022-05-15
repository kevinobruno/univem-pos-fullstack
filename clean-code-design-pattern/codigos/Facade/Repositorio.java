package Facade;

public class Repositorio {

    private int qtd, temp;

    public Repositorio(int qtd, int temp) {
        this.qtd = qtd;
        this.temp = temp;
    }

    public void ejetar() {
        for (int i = 0; i < this.qtd; i++) {
            System.out.println("Total de agua ejetada em " + i + "...");
        }
        System.out.println("Agua ejetada!");
    }

    public void ferver() {
        for (int i = 0; i < this.temp; i++) {
            System.out.println("Temperatura em " + i + "...");
        }
        System.out.println("Temperatura atingida!");
    }
}
