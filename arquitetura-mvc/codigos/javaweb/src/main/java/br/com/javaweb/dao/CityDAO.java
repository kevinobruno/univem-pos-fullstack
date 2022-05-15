package br.com.javaweb.dao;

import java.util.ArrayList;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;

import br.com.javaweb.model.City;
import br.com.javaweb.util.HibernateUtil;

public class CityDAO extends BaseDAO<City> {
    public ArrayList<City> listByStateId(Long stateId) {
        Session session = HibernateUtil.getSessionFactory().openSession();

        try {
            Criteria query = session.createCriteria(City.class);
            query.add(Restrictions.eq("state.id", stateId));
            query.addOrder(Order.asc("name"));

            ArrayList<City> cityList = (ArrayList<City>) query.list();

            return cityList;
        } catch (RuntimeException err) {
            throw err;
        } finally {
            session.close();
        }
    }
}
