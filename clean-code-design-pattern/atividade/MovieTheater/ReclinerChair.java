package MovieTheather;

public class ReclinerChair {

    private int tiltAngle;

    public ReclinerChair(int tiltAngle) {
        this.tiltAngle = tiltAngle;
    }

    public void lean() {
        System.out.println("Changing recliner chair tilt angle to " + this.tiltAngle);
    }
}
