package MovieTheather;

public class Projector {

    private int brightness;

    public Projector(int brightness) {
        this.brightness = brightness;
    }

    public void turnOn() {
        System.out.println("Changing projector brightness to " + this.brightness);
    }
}
