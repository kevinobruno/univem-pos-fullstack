package br.com.javaweb.util;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class HibernateUtil {

	private static SessionFactory sessionFactory = createSessionFactory();

	public static SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public static SessionFactory createSessionFactory() {
		try {
			Configuration config = new Configuration().configure("hibernate.cfg.xml");
			SessionFactory factory = config.buildSessionFactory();
			return factory;
		} catch (Throwable err) {
			System.err.println("Session Factory could not be create " + err);
			throw new ExceptionInInitializerError(err);
		}
	}
}
