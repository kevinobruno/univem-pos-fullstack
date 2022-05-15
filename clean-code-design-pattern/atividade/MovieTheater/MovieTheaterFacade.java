package MovieTheather;

import java.util.ArrayList;

public class MovieTheaterFacade {

    BlueRay blueRay;
    Projector projector;
    ArrayList<ReclinerChair> reclinerChairs;

    private static final int CHAIRS = 8;

    public enum Environment {
        ADVENTURE,
        ROMANTIC,
        ACTION,
    }

    public MovieTheaterFacade(Environment environment) {
        switch(environment) {
            case ADVENTURE:
                adventure();
                break;
            case ROMANTIC:
                romantic();
                break;
            case ACTION:
                action();
                break;
        }

        blueRay.selectMovie();
        projector.turnOn();

        for (ReclinerChair reclinerChain : reclinerChairs) {
            reclinerChain.lean();
        }

        System.out.println("Movie is about to start, enjoy!");
    }

    public void adventure() {
        blueRay = new BlueRay(1);
        projector = new Projector(70);

        reclinerChairs = new ArrayList<ReclinerChair>();

        for (int i = 0; i < this.CHAIRS; i++) {
            reclinerChairs.add(new ReclinerChair(60));
        }
    }

    public void romantic() {
        blueRay = new BlueRay(2);
        projector = new Projector(60);

        reclinerChairs = new ArrayList<ReclinerChair>();

        for (int i = 0; i < this.CHAIRS; i++) {
            reclinerChairs.add(new ReclinerChair(100));
        }
    }

    public void action() {
        blueRay = new BlueRay(3);
        projector = new Projector(90);

        reclinerChairs = new ArrayList<ReclinerChair>();

        for (int i = 0; i < this.CHAIRS; i++) {
            reclinerChairs.add(new ReclinerChair(40));
        }
    }
}
