package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="order_detail")
public class OrderDetail {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "order_detail_id")
	private int orderDetailId;
	private int quantity;
	private double amount;
		
	
	@OneToOne
	@JoinColumn(name = "product_id")
	private Product product;
	
	@OneToOne
	@JoinColumn(name = "combo_id")
	private Combo combo;
	
	@OneToOne
	@JoinColumn(name = "topping_id")
	private Topping topping;
	
	@ManyToOne
	@JoinColumn(name = "order_id")
	private Order order;
	
	public OrderDetail() {
	}

	
	
}
