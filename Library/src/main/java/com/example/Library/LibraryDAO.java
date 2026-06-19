package com.example.Library;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class LibraryDAO {
	private static SessionFactory factory;
	static {
		factory = new Configuration()
				.configure("hibernate.cfg.xml")
				.addAnnotatedClass(Library.class)
				.buildSessionFactory();
	}
	
	public static Session getSession() {
		return factory.openSession();
	}
	
	public void save(Library b) {
		Session session = getSession();
		Transaction tx = session.beginTransaction();
		session.persist(b);
		tx.commit();
		session.close();
	}
	
	public Library find(int Bid) {
		Session session = getSession();
		Library b = session.get(Library.class, Bid);
		session.close();
		return b;
	}
	
	public List<Library> findAll(){
		Session session = getSession();
		List<Library> list = session.createQuery("From Library",Library.class).list();
		session.close();
		return list;
	}
	
	public void update(Library b) {
		Session session = getSession();
		Transaction tx = session.beginTransaction();
		session.merge(b);
		tx.commit();
		session.close();	
	}
	
	public void delete(int Bid) {
		Session session = getSession();
		Transaction tx = session.beginTransaction();
		Library b = session.get(Library.class, Bid);
		if(b != null) session.remove(b);
		tx.commit();
		session.close();
	}
}
