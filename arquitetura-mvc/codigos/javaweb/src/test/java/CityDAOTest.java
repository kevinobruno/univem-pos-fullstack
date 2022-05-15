import java.util.ArrayList;

import br.com.javaweb.dao.CityDAO;
import br.com.javaweb.dao.StateDAO;
import br.com.javaweb.model.City;
import br.com.javaweb.model.State;

public class CityDAOTest {
	
	public void save() {
		CityDAO cityDAO = new CityDAO();
		StateDAO stateDAO = new StateDAO();
		State state = stateDAO.findById(1L);
		City city = new City();
		
		city.setName("Marília");
		city.setState(state);
		
		cityDAO.save(city);
	}
	
	public void search() {
		CityDAO cityDAO = new CityDAO();
		City city = cityDAO.findById(1L);
		System.out.println("Código da City: " + city.getId());
		System.out.println("Nome da City: " + city.getName());
		System.out.println("Código do State: " + city.getState().getId());
		System.out.println("Sigla do State: " + city.getState().getUf());
		System.out.println("Nome do State: " + city.getState().getName());
	
	}

	public void delete() {
		CityDAO cityDAO = new CityDAO();
		City city = cityDAO.findById(1L);
	
		cityDAO.delete(city);
		System.out.println("City removida com sucesso!");
		System.out.println("Código da City: " + city.getId());
		System.out.println("Nome da City: " + city.getName());
		System.out.println("Código do State: " + city.getState().getId());
		System.out.println("Sigla do State: " + city.getState().getUf());
		System.out.println("Nome do State: " + city.getState().getName());
		
	}
	
	public void update() {
		Long idCity = 3L;
		Long idState = 2L;
		
		StateDAO stateDAO = new StateDAO();
		State state = stateDAO.findById(idState);
		
		CityDAO cityDAO = new CityDAO();
		City city = cityDAO.findById(idCity);
		
		System.out.println("City a ser editada: ");
		System.out.println("Código da City: " + city.getId());
		System.out.println("Nome da City: " + city.getName());
		System.out.println("Código do State: " + city.getState().getId());
		System.out.println("Sigla do State: " + city.getState().getUf());
		System.out.println("Nome do State: " + city.getState().getName());
		
		city.setName("Florianopolis");
		city.setState(state);	
		cityDAO.update(city);
		
		System.out.println("City editada: ");
		System.out.println("Código da City: " + city.getId());
		System.out.println("Nome da City: " + city.getName());
		System.out.println("Código do State: " + city.getState().getId());
		System.out.println("Sigla do State: " + city.getState().getUf());
		System.out.println("Nome do State: " + city.getState().getName());

	}
	
	public void list() {
		CityDAO cityDAO = new CityDAO();
		ArrayList<City> result = cityDAO.list();

		for (City city : result) {
			System.out.println("Código da City: " + city.getId());
			System.out.println("Nome da City: " + city.getName());
			System.out.println("Código do State: " + city.getState().getId());
			System.out.println("Sigla do State: " + city.getState().getUf());
			System.out.println("Nome do State: " + city.getState().getName());
		}
	}

}
