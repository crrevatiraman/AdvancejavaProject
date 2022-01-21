package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="feedback")
public class Feedback {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "feedback_id")
	private int feedbackId;
	@Column(name = "food_quality",length=20)
	private String foodQuality;
	@Column(name = "delivery_service",length=20)
	private String deliveryService;
	@Column(name = "order_aacuracy",length=20)
	private String orderAccuracy;
	@Column(name = "overall_experience",length=20)
	private String overallExperience;
	@Column(length=20)
	private String comment; 
	
	
	@ManyToOne
	@JoinColumn(name="user_id")
	private User user;
	
	@OneToOne
	@JoinColumn(name = "order_id")
	private Order order;
	

	
	

	public Feedback() {
	}

	

	
	
	
	
}
