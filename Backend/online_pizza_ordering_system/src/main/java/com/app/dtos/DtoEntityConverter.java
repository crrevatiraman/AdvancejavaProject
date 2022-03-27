package com.app.dtos;

import org.springframework.stereotype.Component;

import com.app.entities.Combo;
import com.app.entities.Product;
import com.app.entities.SubCategory;
import com.app.entities.Topping;
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
	

	

//	public Combo toComboEntity(ComboFormDTO comboDto)
//	{
//		
//		Combo entity = new Combo();
//		BeanUtils.copyProperties(comboDto, entity, "comboImage");
//		if(comboDto.getComboImage() != null)
//			entity.setComboImage(comboDto.getComboImage().getOriginalFilename());
//		return entity;
//		
//
//	}
	
	
	public Combo toComboEntity(ComboDTO dto)
	{
		
		Combo entity = new Combo();
		entity.setComboCategory(dto.getComboCategory());
		entity.setComboId(dto.getComboId());
		entity.setComboImage(dto.getComboImage());
		entity.setComboName(dto.getComboName());
		entity.setComboPrice(dto.getComboPrice());
		entity.setDescription(dto.getDescription());
		
		return entity;
		

	}
	
	
	public ComboDTO toComboDto(Combo entity)
	{
		
		ComboDTO dto = new ComboDTO();
		dto.setComboCategory(entity.getComboCategory());
		dto.setComboId(entity.getComboId());
		dto.setComboImage(entity.getComboImage());
		dto.setComboName(entity.getComboName());
		dto.setComboPrice(entity.getComboPrice());
		dto.setDescription(entity.getComboCategory());
		
		return dto;
		

	}
	
	public Topping toToppingEntity(ToppingDTO dto) {
		Topping entity = new Topping();
		
		entity.setToppingName(dto.getToppingName());
		entity.setToppingPrice(dto.getToppingPrice());
		
		return entity;		
	}
	
	public ToppingDTO toToppingDto(Topping entity) {
		ToppingDTO dto = new ToppingDTO();
		
		dto.setToppingName(entity.getToppingName());
		dto.setToppingPrice(entity.getToppingPrice());
		
		return dto;		
	}
	
//	public Product toProductEntity(ProductFormDTO productDto)
//	{
//		
//		Product entity = new Product();
//		BeanUtils.copyProperties(productDto, entity, "productImage");
//		if(productDto.getProductImage() != null)
//			entity.setProductImage(productDto.getProductImage().getOriginalFilename());
//		return entity;
//
//	}
	
	
	
	
	

	
	public SubCategoryDTO toSubCategoryDto(SubCategory entity) {
		SubCategoryDTO dto = new SubCategoryDTO();
		dto.setSubCategoryId(entity.getSubCategoryId());
		dto.setCrustType(entity.getCrustType());
		dto.setPrice(entity.getPrice());
		dto.setSize(entity.getSize());
		dto.setProductId(entity.getProductId());
		
	
		return dto;
	}
	
	
	public SubCategory toSubCategoryEntity(SubCategoryDTO dto) {
		SubCategory entity = new SubCategory();
		entity.setSubCategoryId(dto.getSubCategoryId());
		entity.setCrustType(dto.getCrustType());
		entity.setPrice(dto.getPrice());
		entity.setSize(dto.getSize());
		
		return entity;
	}
	
	public ProductDTO toProductDto(Product entity) {
		ProductDTO dto = new ProductDTO();
		
		dto.setCategory(entity.getCategory());
		dto.setDescription(entity.getDescription());
		dto.setProductId(entity.getProductId());
		dto.setProductImage(entity.getProductImage());
		dto.setProductName(entity.getProductName());
		dto.setSubCategoryList(entity.getSubCategory());
		
		return dto;		
	}
	
	public Product toProductEntity(ProductDTO dto) {
		Product entity = new Product();
		entity.setCategory(dto.getCategory());
		entity.setDescription(dto.getDescription());
		entity.setProductId(dto.getProductId());
		entity.setProductImage(dto.getProductImage());
		entity.setProductName(dto.getProductName());
		entity.setSubCategory(dto.getSubCategoryList());
	
		return entity;
	}
}
