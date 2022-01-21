package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name="combo")
public class Combo {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "combo_id")
	private int comboId;
	@Column(name = "combo_name",length=100)
	private String comboName;
	@Lob
	@Column(name = "combo_image")
	private byte[] comboImage;
	@Column(name = "combo_price")
	private double comboPrice;
	@Column(length=250)
	private String description;
	@Column(name = "combo_category",length=20)
	private String comboCategory;
	
//	@ManyToOne
//	@JoinColumn(name = "order_detail_id")
//	private OrderDetail orderDetail;
	
	
	

	public Combo() {
	}

	
	
	
	
	
}
