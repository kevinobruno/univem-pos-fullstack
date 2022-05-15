package Decorator;

public class Principal {
    public static void main(String[] args) {
        Coquetel minhaBebida = new Cachaca();
        System.out.println(minhaBebida.getNome() + " = " + minhaBebida.getPreco());

        minhaBebida = new Refrigerante(minhaBebida);
        System.out.println(minhaBebida.getNome() + " = " + minhaBebida.getPreco());

        minhaBebida = new Acucar(minhaBebida);
        System.out.println(minhaBebida.getNome() + " = " + minhaBebida.getPreco());
    }
}
