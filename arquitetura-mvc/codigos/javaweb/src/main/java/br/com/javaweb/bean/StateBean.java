package br.com.javaweb.bean;

import java.io.Serializable;
import java.util.ArrayList;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.faces.event.ActionEvent;

import org.omnifaces.util.Messages;

import br.com.javaweb.model.State;
import br.com.javaweb.dao.StateDAO;

@ViewScoped
@ManagedBean(name = "stateBean")
public class StateBean implements Serializable {

	private State state;
	private ArrayList<State> states;

	public State getState() {
		return state;
	}

	public void setState(State state) {
		this.state = state;
	}

	public ArrayList<State> getStates() {
		return states;
	}

	public void setStates(ArrayList<State> states) {
		this.states = states;
	}

	@PostConstruct
	public void list() {
		try {
			states = new StateDAO().list();
		} catch (RuntimeException err) {
			err.printStackTrace();
			Messages.addGlobalError("Erro ao listar os estados!");
		}
	}

	public void create() {
		state = new State();
	}

	public void delete(ActionEvent event) {
		try {
			state = (State) event.getComponent().getAttributes().get("selectedState");
			StateDAO stateDAO = new StateDAO();
			stateDAO.delete(state);

			states = stateDAO.list();

			Messages.addGlobalInfo("Estado removido com sucesso!");
		} catch (RuntimeException err) {
			err.printStackTrace();
			Messages.addGlobalError("Erro ao remover o estado!");
		}
	}

	public void save() {
		try {
			StateDAO stateDAO = new StateDAO();
			stateDAO.save(state);

			state = new State();
			states = stateDAO.list();

			Messages.addGlobalInfo("Estado salvo com sucesso!");
		} catch (RuntimeException err) {
			err.printStackTrace();
			Messages.addGlobalError("Erro ao salvar o estado!");
		}
	}

	public void update(ActionEvent event) {
		try {
			state = (State) event.getComponent().getAttributes().get("selectedState");
		} catch (RuntimeException err) {
			err.printStackTrace();
		}
	}
}
