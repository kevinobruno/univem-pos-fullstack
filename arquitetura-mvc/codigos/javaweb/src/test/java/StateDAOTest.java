import java.util.ArrayList;

import br.com.javaweb.dao.StateDAO;
import br.com.javaweb.model.State;

public class StateDAOTest {

	public void save(){		
		StateDAO stateDAO = new StateDAO();	
		State state = new State();
		
		state.setName("Sao Paulo");
		state.setUf("SP");
		stateDAO.save(state);		
	}
	
	public void findById() {
		StateDAO stateDAO = new StateDAO();
		State state = new State();
		
		state = stateDAO.findById(1L);
		System.out.println(state.getName());
	}
	
	public void delete() {
		StateDAO stateDAO = new StateDAO();
		State state = stateDAO.findById(1L);
		
		if (state == null) {
			System.out.println("Nenhum registro encontrado!");
		}
		else {
			stateDAO.delete(state);
			System.out.println("Registro removido!");
		}
	}

	public void update() {
		StateDAO stateDAO = new StateDAO();
		State state = stateDAO.findById(1L);
		
		if (state == null) {
			System.out.println("Nenhum registro encontrado!");
		}
		else {
			System.out.println("Registro editado - Antes: ");
			System.out.println(state.getId() + " - " + state.getUf() + " - " + state.getName());
			
			state.setName("Santa Catarina");
			state.setUf("SC");
			stateDAO.update(state);
			
			System.out.println("Registro editado - Depois: ");
			System.out.println(state.getId() + " - " + state.getUf() + " - " + state.getName());
			
		}
	}

	public void list() {
		StateDAO stateDAO = new StateDAO();
		ArrayList<State> resultado = stateDAO.list();
		System.out.println("Total de registros encontrados: " + resultado.size());
		
		for(State state : resultado) {
			System.out.println(state.getName());
		}
	}
}
