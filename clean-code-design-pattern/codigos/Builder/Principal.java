package Builder;

public class Principal {
    public static void main(String[] args) {
        SanduicheBuilder hamburguerBuilder = new HamburguerBuilder();
        SanduicheBuilder fishBurguerBuilder = new FishBurguerBuilder();

        Cozinha cozinha = new Cozinha();
        cozinha.fazerSanduiche(hamburguerBuilder);
        cozinha.fazerSanduiche(fishBurguerBuilder);

        hamburguerBuilder.getSanduiche();
        fishBurguerBuilder.getSanduiche();
    }
}
