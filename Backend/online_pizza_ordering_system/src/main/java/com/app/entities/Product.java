package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.MapsId;
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
	
	
	
	
//	@OneToMany(mappedBy = "product")
//	private List<SubCategory> subCategory;
//	
//	@OneToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "like_id")
//	private ProductLikeStatus productLikeStatus;

	public Product() {
	}

	
	
	
}
