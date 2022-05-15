package Builder;

public class FishBurguerBuilder extends SanduicheBuilder {

    private Sanduiche fishBurguer = new FishBurguer();

    @Override
    public void abrirPao() {
        System.out.println("Abre pão de sanduiche de peixe");
    }

    @Override
    public void inserirIngredientes() {
        System.out.println("Insere peixe");
    }

    @Override
    public void fecharPao() {
        System.out.println("Fecha pão de sanduiche de peixe");
    }

    @Override
    public Sanduiche getSanduiche() {
        System.out.println("Burguer de peixe está pronto");
        return this.fishBurguer;
    }
}
