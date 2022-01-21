package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="order_status")
public class OrderStatus {
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "status_id")
	private int statusId;
	@Column(name = "status_type",length= 20)
	private String statusType;
	
	@OneToOne
	@JoinColumn(name = "order_id")
	private Order order;

	public OrderStatus() {
	}

	public OrderStatus(int statusId, String statusType, Order order) {
		this.statusId = statusId;
		this.statusType = statusType;
		this.order = order;
	}

	public OrderStatus(int statusId, String statusType) {
		this.statusId = statusId;
		this.statusType = statusType;
	}

	public int getStatusId() {
		return statusId;
	}

	public void setStatusId(int statusId) {
		this.statusId = statusId;
	}

	public String getStatusType() {
		return statusType;
	}

	public void setStatusType(String statusType) {
		this.statusType = statusType;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	@Override
	public String toString() {
		return String.format("OrderStatus [statusId=%s, statusType=%s, order=%s]", statusId, statusType, order);
	}
	

	
	
	
}
