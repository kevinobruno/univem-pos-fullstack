import java.util.ArrayList;

import br.com.finalproject.domain.Car;
import br.com.finalproject.domain.Owner;
import br.com.finalproject.dao.CarDAO;
import br.com.finalproject.dao.OwnerDAO;

public class MainTest {

	public static void main(String[] args) {
		listCars();
		listOwners();
	}

	public static void listCars() {
		ArrayList<Car> cars = new CarDAO().list();

		for (Car car : cars) {
			System.out.println("ID do carro: " + car.getId());
			System.out.println("Marca do carro: " + car.getBrand());
			System.out.println("Modelo do carro: " + car.getModel());
			System.out.println("Ano do carro: " + car.getYear());
			System.out.println("Tipo do carro: " + car.getType());
		}
	}

	public static void listOwners() {
		ArrayList<Owner> owners = new OwnerDAO().list();

		for (Owner owner : owners) {
			System.out.println("ID do proprietário: " + owner.getId());
			System.out.println("Nome do proprietário: " + owner.getName());
			System.out.println("Telefone do proprietário: " + owner.getPhone());
			System.out.println("Endereço do proprietário: " + owner.getAddress());
			System.out.println("Idade do proprietário: " + owner.getAge());
			System.out.println("Carro do proprietário: " + owner.getCar().getBrand());
		}
	}
}
