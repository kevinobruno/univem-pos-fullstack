package Facade;

public class Pressurizador {

    private int pressao;

    public Pressurizador(int pressao) {
        this.pressao = pressao;
    }

    public void ligar() {
        for (int i = 0; i < this.pressao; i++) {
            System.out.println("Pressao pronta em " + i + "...");
        }
        System.out.println("Pressao pronta!");
    }
}
