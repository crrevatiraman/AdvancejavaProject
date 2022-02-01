package com.app.entities;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="sub_category")
public class SubCategory {

	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "sub_category_id")
	private int subCategoryId;
	@Column(length= 20)
	private String size;
	@Column(name = "crust_type",length = 100)
	private String crustType;
	private double price;
	
	@ManyToOne
	@JoinColumn(name = "product_id")
	private Product product;
	
	
	public SubCategory() {
	}


	public SubCategory(int subCategoryId, String size, String crustType, double price, Product product) {
		this.subCategoryId = subCategoryId;
		this.size = size;
		this.crustType = crustType;
		this.price = price;
		this.product = product;
	}


	public SubCategory(int subCategoryId, String size, String crustType, double price) {
		this.subCategoryId = subCategoryId;
		this.size = size;
		this.crustType = crustType;
		this.price = price;
	}


	public int getSubCategoryId() {
		return subCategoryId;
	}


	public void setSubCategoryId(int subCategoryId) {
		this.subCategoryId = subCategoryId;
	}


	public String getSize() {
		return size;
	}


	public void setSize(String size) {
		this.size = size;
	}


	public String getCrustType() {
		return crustType;
	}


	public void setCrustType(String crustType) {
		this.crustType = crustType;
	}


	public double getPrice() {
		return price;
	}


	public void setPrice(double price) {
		this.price = price;
	}


	public Product getProduct() {
		return product;
	}


	public void setProduct(Product product) {
		this.product = product;
	}


	@Override
	public String toString() {
		return String.format("SubCategory [subCategoryId=%s, size=%s, crustType=%s, price=%s, product=%s]",
				subCategoryId, size, crustType, price, product);
	}

	

	
}
