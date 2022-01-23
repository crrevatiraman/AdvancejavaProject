package com.app.dtos;

public class UserDTO {

	private int userId;	
	private String firstName;	
	private String lastName;
	private String email;
	private String password;
	private String mobileNo;
	
	
	public UserDTO() {
	}


	


	public UserDTO(int userId, String firstName, String lastName, String email, String password, String mobileNo) {
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.mobileNo = mobileNo;
	}





	public int getUserId() {
		return userId;
	}


	public void setUserId(int userId) {
		this.userId = userId;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	


	public String getMobileNo() {
		return mobileNo;
	}





	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}





	@Override
	public String toString() {
		return String.format("UserDTO [userId=%s, firstName=%s, lastName=%s, email=%s, password=%s, mobileNo=%s]",
				userId, firstName, lastName, email, password, mobileNo);
	}





	
}
