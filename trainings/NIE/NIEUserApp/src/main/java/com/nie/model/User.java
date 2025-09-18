package com.nie.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Document(collection = "user")
public class User {
	@Id
	private int userId;
	@Size(min=3,message="username must be minimum of 3 chars")
	private String userName;
	@Pattern(regexp = "^[6789][0-9]{9}$",message="mobile number must start with either 6,,7,8,9, and need to have exactly 10 digits")
	private String mobileNum;
	@Email
	private String email;
	@Pattern(regexp = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d).{8,}$",message="enter valid password")
	private String password;
	public User() {
		super();
	}
	public User(int userId, String userName, String mobileNum, String email, String password) {
		super();
		this.userId = userId;
		
		this.userName = userName;
		this.mobileNum = mobileNum;
		this.email = email;
		this.password = password;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getMobileNum() {
		return mobileNum;
	}
	public void setMobileNum(String mobileNum) {
		this.mobileNum = mobileNum;
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
	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", mobileNum=" + mobileNum + ", email=" + email
				+ ", password=" + password + "]";
	}
	

}
