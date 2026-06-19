package com.example.Library;

import java.util.List;
import java.util.Scanner;

public class App {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        LibraryDAO dao = new LibraryDAO();

        while (true) {

            System.out.println("\n1.Save/Insert");
            System.out.println("2.Find");
            System.out.println("3.Find All");
            System.out.println("4.Update");
            System.out.println("5.Delete");
            System.out.println("6.Exit");

            System.out.print("Enter Choice: ");
            int ch = sc.nextInt();

            switch (ch) {

                case 1: {
                    System.out.println("Enter Book ID:");
                    int bid = sc.nextInt();
                    sc.nextLine();

                    System.out.println("Enter Book Title:");
                    String bname = sc.nextLine();

                    System.out.println("Enter Author name:");
                    String author = sc.nextLine();

                    System.out.println("Enter Category:");
                    String category = sc.nextLine();

                    System.out.println("Enter price:");
                    double price = sc.nextDouble();
                    
                    System.out.println("Enter available Copies:");
                    int avail = sc.nextInt();

                    Library b = new Library(bid, bname, author, category, price, avail);
                    dao.save(b);

                    System.out.println("Saved Successfully...");
                    break;
                }

                case 2: {
                    System.out.println("Enter ID:");
                    int id = sc.nextInt();

                    Library b = dao.find(id);

                    if (b != null) {
                    	System.out.println(
                                b.getBid() + " "
                                + b.getTitle() + " "
                                + b.getAuthor() + " "
                                + b.getCategory() + " "
                                + b.getPrice() + " "+ b.getAvailCopies());
                    } else {
                        System.out.println("Record Not Found");
                    }

                    break;
                }

                case 3: {
                    List<Library> list = dao.findAll();

                    if (list.isEmpty()) {
                        System.out.println("No Books Found");
                    } else {
                        for (Library b : list) {
                            System.out.println(
                                    b.getBid() + " "
                                    + b.getTitle() + " "
                                    + b.getAuthor() + " "
                                    + b.getCategory() + " "
                                    + b.getPrice() + " "+ b.getAvailCopies());
                        }
                    }

                    break;
                }

                case 4: {
                    System.out.println("Enter ID to Update:");
                    int bid = sc.nextInt();
                    sc.nextLine();

                    System.out.println("Enter Book Title:");
                    String bname = sc.nextLine();

                    System.out.println("Enter Author name:");
                    String author = sc.nextLine();

                    System.out.println("Enter Category:");
                    String category = sc.nextLine();

                    System.out.println("Enter price:");
                    double price = sc.nextDouble();
                    
                    System.out.println("Enter available Copies:");
                    int avail = sc.nextInt();

                    Library b = new Library(bid, bname, author, category, price, avail);
                    dao.update(b);

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