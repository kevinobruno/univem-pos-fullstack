package br.com.javaweb.dao;

import java.lang.reflect.ParameterizedType;
import java.util.ArrayList;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;

import org.hibernate.Session;
import org.hibernate.Transaction;

import br.com.javaweb.util.HibernateUtil;

public class BaseDAO<Entity> {

    private Class<Entity> entityClass;

    public BaseDAO() {
        this.entityClass = (Class<Entity>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[0];
    }

    public void save(Entity entity) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction transaction = null;

        try {
            transaction = session.beginTransaction();
            session.merge(entity);
            transaction.commit();
        } catch (RuntimeException err) {
            if (transaction != null) {
                transaction.rollback();
            }

            throw err;
        } finally {
            session.close();
        }
    }

    public void delete(Entity entity) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction transaction = null;

        try {
            transaction = session.beginTransaction();
            session.delete(entity);
            transaction.commit();
        } catch (RuntimeException err) {
            if (transaction != null) {
                transaction.rollback();
            }

            throw err;
        } finally {
            session.close();
        }
    }

    public Entity findById(Long id) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        Entity entity = null;

        try {
            entity = session.find(entityClass, id);
        } catch (RuntimeException err) {
            throw err;
        } finally {
            session.close();
        }

        return entity;
    }

    public void update(Entity entity) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction transaction = null;

        try {
            transaction = session.beginTransaction();
            session.update(entity);
            transaction.commit();
        } catch (RuntimeException err) {
            if (transaction != null) {
                transaction.rollback();
            }
            throw err;
        } finally {
            session.close();
        }
    }

    public ArrayList<Entity> list() {
        Session session = HibernateUtil.getSessionFactory().openSession();

        try {
			CriteriaBuilder builder = session.getCriteriaBuilder();
			CriteriaQuery<Entity> query= builder.createQuery(entityClass);
			query.from(entityClass);
			ArrayList<Entity> result = (ArrayList<Entity>) session.createQuery(query).getResultList();
			return result;
        } catch (RuntimeException err) {
            throw err;
        } finally {
            session.close();
        }
    }
}
