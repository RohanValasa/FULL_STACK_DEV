package com.example.Student;

import java.util.List;
import java.util.Scanner;

public class App {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        StudentDAO dao = new StudentDAO();

        while (true) {

            System.out.println("\n1.Save");
            System.out.println("2.Find");
            System.out.println("3.Find All");
            System.out.println("4.Update");
            System.out.println("5.Delete");
            System.out.println("6.Exit");

            System.out.print("Enter Choice: ");
            int ch = sc.nextInt();

            switch (ch) {

                case 1: {
                    System.out.println("Enter ID:");
                    int sid = sc.nextInt();
                    sc.nextLine();

                    System.out.println("Enter Name:");
                    String sname = sc.nextLine();

                    System.out.println("Enter Email:");
                    String email = sc.nextLine();

                    System.out.println("Enter Course:");
                    String course = sc.nextLine();

                    System.out.println("Enter Age:");
                    int age = sc.nextInt();

                    Student s = new Student(sid, sname, email, course, age);
                    dao.save(s);

                    System.out.println("Saved Successfully...");
                    break;
                }

                case 2: {
                    System.out.println("Enter ID:");
                    int id = sc.nextInt();

                    Student s = dao.find(id);

                    if (s != null) {
                        System.out.println(
                                s.getSid() + " "
                                + s.getSname() + " "
                                + s.getEmail() + " "
                                + s.getCourse() + " "
                                + s.getAge());
                    } else {
                        System.out.println("Record Not Found");
                    }

                    break;
                }

                case 3: {
                    List<Student> list = dao.findAll();

                    if (list.isEmpty()) {
                        System.out.println("No Records Found");
                    } else {
                        for (Student s : list) {
                            System.out.println(
                                    s.getSid() + " "
                                    + s.getSname() + " "
                                    + s.getEmail() + " "
                                    + s.getCourse() + " "
                                    + s.getAge());
                        }
                    }

                    break;
                }

                case 4: {
                    System.out.println("Enter ID to Update:");
                    int sid = sc.nextInt();
                    sc.nextLine();

                    System.out.println("Enter New Name:");
                    String sname = sc.nextLine();

                    System.out.println("Enter New Email:");
                    String email = sc.nextLine();

                    System.out.println("Enter New Course:");
                    String course = sc.nextLine();

                    System.out.println("Enter New Age:");
                    int age = sc.nextInt();

                    Student s = new Student(sid, sname, email, course, age);
                    dao.update(s);

                    System.out.println("Updated Successfully...");
                    break;
                }

                case 5: {
                    System.out.println("Enter ID to Delete:");
                    int id = sc.nextInt();

                    dao.delete(id);

                    System.out.println("Deleted Successfully...");
                    break;
                }

                case 6: {
                    System.out.println("Exiting...");
                    sc.close();
                    System.exit(0);
                    break;
                }

                default: {
                    System.out.println("Invalid Choice!");
                }
            }
        }
    }
}