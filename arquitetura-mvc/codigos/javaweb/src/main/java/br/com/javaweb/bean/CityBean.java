package br.com.javaweb.bean;

import java.io.Serializable;
import java.util.ArrayList;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.faces.event.ActionEvent;

import org.omnifaces.util.Messages;

import br.com.javaweb.dao.CityDAO;
import br.com.javaweb.dao.StateDAO;
import br.com.javaweb.model.City;
import br.com.javaweb.model.State;


@ViewScoped
@ManagedBean(name = "cityBean")
public class CityBean implements Serializable {
	
	private City city;

	private ArrayList<City> cities;
	private ArrayList<State> states;
	
	public City getCity() {
		return city;
	}

	public void setCity(City city) {
		this.city = city;
	}

	public ArrayList<City> getCities() {
		return cities;
	}

	public void setCities(ArrayList<City> cities) {
		this.cities = cities;
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
			CityDAO cityDAO = new CityDAO();
			cities = cityDAO.list();
		} catch (RuntimeException err) {
			err.printStackTrace();
			Messages.addGlobalError("Erro ao list cidades!");
		}
	}

	public void create() {
		try {
			city = new City();
			StateDAO stateDAO = new StateDAO();
			states = stateDAO.list();
		} catch (RuntimeException err){
			err.printStackTrace();
			Messages.addGlobalError("Erro ao criar uma nova cidade!");
		}
	}

	public void delete(ActionEvent event) {
		try {
			city = (City) event.getComponent().getAttributes().get("selectedCity");
			CityDAO cityDAO = new CityDAO();
			cityDAO.delete(city);

			cities = cityDAO.list();

			Messages.addGlobalInfo("Cidade removida com sucesso!");
		} catch (RuntimeException err) {
			err.printStackTrace();
			Messages.addGlobalError("Erro ao tentar remover cidade!");
		}
	}

	public void save() {
		try {
			CityDAO cityDAO = new CityDAO();

			cityDAO.save(city);
			city = new City();
			cities = cityDAO.list();

			StateDAO stateDAO = new StateDAO();
			states = stateDAO.list();

			Messages.addGlobalInfo("Cidade salva com sucesso!");
		} catch (RuntimeException err) {
			err.printStackTrace();
			Messages.addGlobalError("Erro ao tentar salvar nova cidade!");
		}
	}

	public void update(ActionEvent event) {
		try {
			city = (City)event.getComponent().getAttributes().get("selectedCity");
			StateDAO stateDAO = new StateDAO();
			states = stateDAO.list();
		} catch (RuntimeException err) {
			err.printStackTrace();
			Messages.addGlobalError("Erro ao tentar editar cidade!");	
		}
	}
}
