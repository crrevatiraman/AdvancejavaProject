package com.app.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name="orders")
public class Order {
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "order_id")
	private int orderId;
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "order_datetime")
	private Date orderDateTime;
	@Column(name = "total_amount")
	private double totalAmount;
	@Column(name = "payment_mode",length = 20)
	private String paymentMode;
	


	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	@OneToMany(mappedBy = "order")
	private List<OrderDetail> orderDetailList;

	public Order() {
	}



	

	
	
}
