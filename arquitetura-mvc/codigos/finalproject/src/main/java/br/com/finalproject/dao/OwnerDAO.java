package br.com.finalproject.dao;

import java.util.ArrayList;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;

import br.com.finalproject.domain.Owner;
import br.com.finalproject.util.HibernateUtil;

public class OwnerDAO extends BaseDAO<Owner> {
    public ArrayList<Owner> listByCarId(Long carId) {
        Session session = HibernateUtil.getSessionFactory().openSession();

        try {
            Criteria query = session.createCriteria(Owner.class);
            query.add(Restrictions.eq("car.id", carId));
            query.addOrder(Order.asc("name"));

            ArrayList<Owner> result = (ArrayList<Owner>) query.list();

            return result;
        } catch (RuntimeException err) {
            throw err;
        } finally {
            session.close();
        }
    }
}
