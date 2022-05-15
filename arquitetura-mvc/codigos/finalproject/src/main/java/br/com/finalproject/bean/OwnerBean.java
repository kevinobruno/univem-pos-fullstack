package br.com.finalproject.bean;

import java.io.Serializable;
import java.util.ArrayList;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.faces.event.ActionEvent;

import org.omnifaces.util.Messages;

import br.com.finalproject.dao.CarDAO;
import br.com.finalproject.dao.OwnerDAO;
import br.com.finalproject.domain.Car;
import br.com.finalproject.domain.Owner;

@ViewScoped
@ManagedBean(name = "ownerBean")
public class OwnerBean implements Serializable {

	private Owner owner;
	private ArrayList<Owner> owners;
	private ArrayList<Car> cars;

	public Owner getOwner() {
		return owner;
	}

	public void setOwner(Owner owner) {
		this.owner = owner;
	}

	public ArrayList<Owner> getOwners() {
		return owners;
	}

	public void setOwners(ArrayList<Owner> owners) {
		this.owners = owners;
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
			owners = new OwnerDAO().list();
		} catch (RuntimeException err) {
			err.printStackTrace();
			Messages.addGlobalError("Erro ao listar proprietários!");
		}
	}

	public void create() {
		owner = new Owner();
		cars = new CarDAO().list();
	}

	public void delete(ActionEvent event) {
		try {
			owner = (Owner) event.getComponent().getAttributes().get("selectedOwner");
			OwnerDAO ownerDAO = new OwnerDAO();
			ownerDAO.delete(owner);

			owners = ownerDAO.list();

			Messages.addGlobalInfo("Proprietário removido com sucesso!");
		} catch (RuntimeException err) {
			err.printStackTrace();
			Messages.addGlobalError("Erro ao remover ownerro!");
		}
	}

	public void save() {
		try {
			OwnerDAO ownerDAO = new OwnerDAO();
			ownerDAO.save(owner);

			owner = new Owner();
			owners = ownerDAO.list();
			cars = new CarDAO().list();

			Messages.addGlobalInfo("Proprietário salvo com sucesso!");
		} catch (RuntimeException err) {
			err.printStackTrace();
			Messages.addGlobalError("Erro ao salvar proprietário!");
		}
	}

	public void update(ActionEvent event) {
		try {
			owner = (Owner) event.getComponent().getAttributes().get("selectedOwner");
			cars = new CarDAO().list();
		} catch (RuntimeException err) {
			err.printStackTrace();
		}
	}
}
