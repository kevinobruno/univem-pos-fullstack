package MovieTheather;

public class MovieTheather {
    public static void main(String[] args) {
        MovieTheaterFacade.Environment environment = MovieTheaterFacade.Environment.ACTION; 
        MovieTheaterFacade movieTheather = new MovieTheaterFacade(environment);
    } 
}
