package com.app.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.AddressDTO;
import com.app.dtos.Credential;
import com.app.dtos.Response;
import com.app.dtos.UserAddressDTO;
import com.app.dtos.UserDTO;
import com.app.entities.User;
import com.app.services.UserServiceImpl;

@CrossOrigin(origins = "*")
@RestController
public class UserController {

	@Autowired
	private UserServiceImpl userService;
	

	@PostMapping("/user/signin")
	public ResponseEntity<?> signIn(@RequestBody Credential cred) {
		UserDTO userDto = userService.findUserByEmailAndPassword(cred);
		if(userDto == null)
			return Response.error("user not found");
		return Response.success(userDto);
	}
	

	 
	 @PostMapping("/user/register")
		public ResponseEntity<?> registerUser(@RequestBody UserDTO userDto)
		{
		 	UserDTO result = userService.saveUserDetails(userDto);
		 	return Response.success(result);
		}
	 
	 
	 @PutMapping("/user/forgot-password")
	 public ResponseEntity<?> forgotPassword(@RequestBody Credential cred)
	 {
		 User user = userService.resetPassword(cred);
		 if(user == null )
			 return Response.error("user not found");
		return Response.success("Password updated");
		 
	 }
	 
	 
	 @GetMapping("/user/search-employee/{email}")
	 public ResponseEntity<?> searchEmployee(@PathVariable("email") String email)
	 {
		 UserDTO userDto = userService.findUserByEmail(email);
		 if(userDto == null )
			 return Response.error("user not found");
		return Response.success(userDto);
	 }
	 
	 @PutMapping("/user/update-employee/{userId}")
	 public ResponseEntity<?> updateEmployeeDetails(@PathVariable("userId") int userId,@RequestBody UserAddressDTO userAddressDto)
	 {
		 Map<String, Object> result = userService.updateEmployeeDetails(userId, userAddressDto);
		
		 return Response.success(result);
		 	
	 }

	 @PostMapping("/user/add-address/{userId}")
		public ResponseEntity<?> addAddress(@PathVariable("userId") int userId, @RequestBody AddressDTO addressDto) {
			Map<String, Object> result = userService.addAddress(userId, addressDto);
			return Response.success(result);
		}
	
}
