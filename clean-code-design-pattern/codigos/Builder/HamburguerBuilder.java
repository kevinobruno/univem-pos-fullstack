package Builder;

public class HamburguerBuilder extends SanduicheBuilder {

    private Sanduiche hamburguer = new Hamburguer();

    @Override
    public void abrirPao() {
        System.out.println("Abre pão de hamburguer");
    }

    @Override
    public void inserirIngredientes() {
        System.out.println("Insere carne e queijo");
    }

    @Override
    public void fecharPao() {
        System.out.println("Fecha pão de hamburguer");
    }

    @Override
    public Sanduiche getSanduiche() {
        System.out.println("Hamburguer está pronto");
        return this.hamburguer;
    }
}
