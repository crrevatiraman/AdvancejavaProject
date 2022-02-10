package com.app.dtos;

import org.springframework.web.multipart.MultipartFile;

public class ProductFormDTO {

	private int productId;
	private String productName;
	private MultipartFile productImage;
	private String category;
	private String description;
	
	
	
	public ProductFormDTO() {
	}


	public ProductFormDTO(int productId, String productName, MultipartFile productImage, String category,
			String description) {
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


	public MultipartFile getProductImage() {
		return productImage;
	}


	public void setProductImage(MultipartFile productImage) {
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


	
	
	
	
	
}
