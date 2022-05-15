package Builder;

public class Cozinha {

    public void fazerSanduiche(SanduicheBuilder builder) {
        builder.abrirPao();
        builder.inserirIngredientes();
        builder.fecharPao();
    }
}
