package com.app.entities;

import java.util.Arrays;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Table(name="product")
public class Product {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "product_id")
	private int productId;
	private String productName;
	@Lob
	@Column(name = "product_image")
	private byte[] productImage;
	private String category;
	private String description;
	
	@OneToOne(mappedBy = "product")
	private OrderDetail orderDetail;
	
	@OneToMany(mappedBy = "product")
	private List<SubCategory> subCategory;

	
	public Product() {
	}


	public Product(int productId, String productName, byte[] productImage, String category, String description,
			OrderDetail orderDetail, List<SubCategory> subCategory) {
		this.productId = productId;
		this.productName = productName;
		this.productImage = productImage;
		this.category = category;
		this.description = description;
		this.orderDetail = orderDetail;
		this.subCategory = subCategory;
	}


	public Product(int productId, String productName, byte[] productImage, String category, String description) {
		this.productId = productId;
		this.productName = productName;
		this.productImage = productImage;
		this.category = category;
		this.description = description;
	}


	public int getProductId() {
		return productId;
	}


	public void setProductId(int productId) {
		this.productId = productId;
	}


	public String getProductName() {
		return productName;
	}


	public void setProductName(String productName) {
		this.productName = productName;
	}


	public byte[] getProductImage() {
		return productImage;
	}


	public void setProductImage(byte[] productImage) {
		this.productImage = productImage;
	}


	public String getCategory() {
		return category;
	}


	public void setCategory(String category) {
		this.category = category;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public OrderDetail getOrderDetail() {
		return orderDetail;
	}


	public void setOrderDetail(OrderDetail orderDetail) {
		this.orderDetail = orderDetail;
	}


	public List<SubCategory> getSubCategory() {
		return subCategory;
	}


	public void setSubCategory(List<SubCategory> subCategory) {
		this.subCategory = subCategory;
	}


	@Override
	public String toString() {
		return String.format(
				"Product [productId=%s, productName=%s, productImage=%s, category=%s, description=%s, orderDetail=%s, subCategory=%s]",
				productId, productName, Arrays.toString(productImage), category, description, orderDetail, subCategory);
	}

	
	
	
}
