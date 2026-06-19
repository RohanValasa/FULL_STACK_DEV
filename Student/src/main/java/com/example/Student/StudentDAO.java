package com.example.Student;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class StudentDAO {

    private static SessionFactory factory;

    static {
        factory = new Configuration()
                .configure("hibernate.cfg.xml")
                .addAnnotatedClass(Student.class)
                .buildSessionFactory();
    }

    public static Session getSession() {
        return factory.openSession();
    }

    // Save
    public void save(Student s) {
        Session session = getSession();
        Transaction tx = session.beginTransaction();

        session.persist(s);

        tx.commit();
        session.close();
    }

    // Find
    public Student find(int sid) {
        Session session = getSession();

        Student s = session.get(Student.class, sid);

        session.close();
        return s;
    }

    // Find All
    public List<Student> findAll() {
        Session session = getSession();

        List<Student> list = session
                .createQuery("from Student", Student.class)
                .list();

        session.close();
        return list;
    }

    // Update
    public void update(Student s) {
        Session session = getSession();
        Transaction tx = session.beginTransaction();

        session.merge(s);

        tx.commit();
        session.close();
    }

    // Delete
    public void delete(int sid) {
        Session session = getSession();
        Transaction tx = session.beginTransaction();

        Student s = session.get(Student.class, sid);

        if (s != null) {
            session.remove(s);
        }

        tx.commit();
        session.close();
    }
}