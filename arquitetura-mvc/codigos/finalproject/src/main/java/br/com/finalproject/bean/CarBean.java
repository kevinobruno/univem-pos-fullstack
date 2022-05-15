package br.com.finalproject.bean;

import java.io.Serializable;
import java.util.ArrayList;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.faces.event.ActionEvent;

import org.omnifaces.util.Messages;

import br.com.finalproject.dao.CarDAO;
import br.com.finalproject.domain.Car;

@ViewScoped
@ManagedBean(name = "carBean")
public class CarBean implements Serializable {

	private Car car;
	private ArrayList<Car> cars;

	public Car getCar() {
		return car;
	}

	public void setCar(Car car) {
		this.car = car;
	}

	public ArrayList<Car> getCars() {
		return cars;
	}

	public void setCars(ArrayList<Car> cars) {
		this.cars = cars;
	}

	@PostConstruct
	public void list() {
		try {
			cars = new CarDAO().list();
		} catch (RuntimeException err) {
			err.printStackTrace();
			Messages.addGlobalError("Erro ao listar carros!");
		}
	}

	public void create() {
		car = new Car();
	}

	public void delete(ActionEvent event) {
		try {
			car = (Car) event.getComponent().getAttributes().get("selectedCar");
			CarDAO carDAO = new CarDAO();
			carDAO.delete(car);

			cars = carDAO.list();

			Messages.addGlobalInfo("Carro removido com sucesso!");
		} catch (RuntimeException err) {
			err.printStackTrace();
			Messages.addGlobalError("Erro ao remover carro!");
		}
	}

	public void save() {
		try {
			CarDAO carDAO = new CarDAO();
			carDAO.save(car);

			car = new Car();
			cars = carDAO.list();

			Messages.addGlobalInfo("Carro salvo com sucesso!");
		} catch (RuntimeException err) {
			err.printStackTrace();
			Messages.addGlobalError("Erro ao salvar carro!");
		}
	}

	public void update(ActionEvent event) {
		try {
			car = (Car) event.getComponent().getAttributes().get("selectedCar");
		} catch (RuntimeException err) {
			err.printStackTrace();
		}
	}
}
