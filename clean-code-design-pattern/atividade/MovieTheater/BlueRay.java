package MovieTheather;

public class BlueRay {

    private int diskNumber;

    public BlueRay(int diskNumber) {
        this.diskNumber = diskNumber;
    }

    public void selectMovie() {
        System.out.println("Selecting movie on disk number " + this.diskNumber);
    }
}
