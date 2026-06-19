package com.example.Library;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;


@Entity
public class Library {
	@Id
	private int Bid;
	private String title;
	private String author;
	private String category;
	private double price;
	private int availCopies;
	public Library() {
    }
	public Library(int Bid,String title,String author,String category,double price,int availCopies) {
		this.Bid = Bid;
		this.title = title;
		this.author = author;
		this.category = category;
		this.price = price;
		this.availCopies = availCopies;
	}
	public int getBid() {
		return Bid;
	}
	public void setBid(int bid) {
		Bid = bid;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public int getAvailCopies() {
		return availCopies;
	}
	public void setAvailCopies(int availCopies) {
		this.availCopies = availCopies;
	}
}
