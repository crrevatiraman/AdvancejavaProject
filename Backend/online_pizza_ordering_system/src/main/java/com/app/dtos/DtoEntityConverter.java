package com.app.dtos;

import java.io.IOException;

import org.springframework.stereotype.Component;

import com.app.entities.Combo;
import com.app.entities.User;

@Component
public class DtoEntityConverter {

	
	public UserDTO toUserDto(User entity) {
		UserDTO dto = new UserDTO();
		dto.setUserId(entity.getUserId());
		dto.setFirstName(entity.getFirstName());
		dto.setLastName(entity.getLastName());
		dto.setEmail(entity.getEmail());
		dto.setPassword(entity.getPassword());
		dto.setMobileNo(entity.getMobileNo());
		return dto;
	}
	
	public User toUserEntity(UserDTO dto) {
		User entity = new User();
		entity.setUserId(dto.getUserId());
		entity.setFirstName(dto.getFirstName());
		entity.setLastName(dto.getLastName());
		entity.setEmail(dto.getEmail());
		entity.setPassword(dto.getPassword());
		entity.setMobileNo(dto.getMobileNo());
		return entity;		
	}
	
	public Credential toCredDto(User entity) {
		Credential dto = new Credential();
		dto.setEmail(entity.getEmail());
		dto.setMobileNo(entity.getMobileNo());
		dto.setPassword(entity.getPassword());
		
		return dto;
	}
	
	public User toUserEntity(Credential dto) {
		User entity = new User();
		
//		entity.setEmail(dto.getEmail());
//		entity.setMobileNo(dto.getMobileNo());
		entity.setPassword(dto.getPassword());
		
		return entity;		
	}
	
	public UserAddressDTO toUserAddressDto(User entity) {
		UserAddressDTO dto = new UserAddressDTO();
		dto.setUserId(entity.getUserId());
		dto.setRole(entity.getRole());
		dto.setGender(entity.getGender());
		dto.setDateOfBirth(entity.getDateOfBirth());
		dto.setAddress(entity.getAddress());
		return dto;
	}
	
	public User toUserEntity(UserAddressDTO dto) {
		User entity = new User();
		entity.setUserId(dto.getUserId());
		entity.setRole(dto.getRole());
		entity.setGender(dto.getGender());
		entity.setDateOfBirth(dto.getDateOfBirth());
		entity.setAddress(dto.getAddress());
		return entity;		
	}
	
//	public ComboDTO toComboDTO(Combo entity)
//	{
//		ComboDTO dto = new ComboDTO();
//		
//		dto.setComboId(entity.getComboId());
//		dto.setComboName(entity.getComboName());
//		dto.setComboCategory(entity.getComboCategory());
//		dto.setComboPrice(entity.getComboPrice());
//		dto.setDescription(entity.getComboCategory());
//		dto.setComboImage(entity.getComboImage());
//		
//		return dto;
//	}
	
	public Combo toComboEntity(ComboDTO dto)
	{
		if(dto.getComboImage() == null)
			return null;
		Combo entity = new Combo();
		
		entity.setComboId(dto.getComboId());
		entity.setComboName(dto.getComboName());
		entity.setComboCategory(dto.getComboCategory());
		entity.setComboPrice(dto.getComboPrice());
		entity.setDescription(dto.getComboCategory());
		try {
			entity.setComboImage(dto.getComboImage().getBytes());
		} catch (IOException e) {
			
			e.printStackTrace();
		}
		
		return entity;
	}

}
