package com.app.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="sub_category")
public class SubCategory implements Serializable {

	
	@Id
	@Column(name = "product_id")
	private int productId;
	@Id
	@Column(length= 20)
	private String size;
	@Column(name = "crust_size",length = 100)
	private String crustSize;
	private double price;
	
	@OneToOne
	@JoinColumn(name = "product_id")
	private Product product;
	
	
	public SubCategory() {
	}



	public SubCategory(int productId, String size, String crustSize, double price) {
		this.productId = productId;
		this.size = size;
		this.crustSize = crustSize;
		this.price = price;
	}



	public int getProductId() {
		return productId;
	}



	public void setProductId(int productId) {
		this.productId = productId;
	}



	public String getSize() {
		return size;
	}



	public void setSize(String size) {
		this.size = size;
	}



	public String getCrustSize() {
		return crustSize;
	}



	public void setCrustSize(String crustSize) {
		this.crustSize = crustSize;
	}



	public double getPrice() {
		return price;
	}



	public void setPrice(double price) {
		this.price = price;
	}



	@Override
	public String toString() {
		return String.format("SubCategory [productId=%s, size=%s, crustSize=%s, price=%s]", productId, size, crustSize,
				price);
	}
	
	
	
}
