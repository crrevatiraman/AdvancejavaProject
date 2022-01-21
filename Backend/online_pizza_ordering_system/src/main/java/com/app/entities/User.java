package com.app.entities;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class User {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "user_id")
	private int userId;
	@Column(name = "first_name",length = 50)
	private String firstName;
	@Column(name = "last_name",length = 50)
	private String lastName;
	@Column(length = 20)
	private String gender;
	@Column(unique=true,length = 50)
	private String email;
	@Column(length = 600)
	private String password;
	@Column(unique=true,name = "mobile_no",length = 50)
	private String mobileNo;
	@Column(name = "dob")
	private LocalDate dateOfBirth;
	@Column(length = 20)
	private String role;
	@Column(name = "is_free")
	private Boolean isFree;
	
	
	@OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
	private List<Order> orderList;
	
	@OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
	private List<Feedback> feedbackList;
	

	@OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
	private List<ProductLikeStatus> productLikeStatus;
	
	

	public User() {
		
	}

	



	
	
	
}
