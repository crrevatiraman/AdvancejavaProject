package com.app.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.ComboFormDTO;
import com.app.dtos.DtoEntityConverter;
import com.app.dtos.ProductDTO;
import com.app.dtos.Response;
import com.app.dtos.SubCategoryDTO;
import com.app.dtos.ToppingDTO;
import com.app.entities.Combo;
import com.app.entities.Product;
import com.app.services.ComboServiceImpl;
import com.app.services.DiskStorageServiceImpl;
import com.app.services.ProductServiceImpl;
import com.app.services.ToppingServiceImpl;

@CrossOrigin(origins = "*")
@RestController
public class ProductController {

	@Autowired
	private ComboServiceImpl comboService;
	@Autowired
	private DtoEntityConverter converter;
	@Autowired
	private ToppingServiceImpl toppingService;
	
	
	
	@Autowired
	private ProductServiceImpl productService;
	
	@Autowired
	private DiskStorageServiceImpl storageService;



	@PostMapping("/product/add-combo")
	public ResponseEntity<?> saveCombo(ComboFormDTO comboDto) {
		Combo combo = converter.toComboEntity(comboDto);
		String image = storageService.store(comboDto.getComboImage());
		combo.setComboImage(image);
		comboService.saveCombo(combo);
		return Response.success(combo);
	}
	
	
	@PostMapping("/product/add-topping")
	public ResponseEntity<?> addTopping(@RequestBody ToppingDTO toppingDto)
	{
		Map<String, Object> result = toppingService.addTopping(toppingDto);
		return Response.success(result);
	}
	
	
	@PostMapping("/product/add-product")
	public ResponseEntity<?> addProduct(ProductDTO productDto) {
		Product product = converter.toProductEntity(productDto);
		String image = storageService.store(productDto.getProductImage());
		product.setProductImage(image);
		product = productService.saveProduct(product);
		return Response.success(product);
	}
	
	
	@PostMapping("/product/add-subcategory")
	public ResponseEntity<?> addSubCategory(@RequestBody SubCategoryDTO subCategoryDto)
	{
		Map<String, Object> result = productService.addSubCategory(subCategoryDto);
		if(result == null)
			return Response.error("sub-category already exist");
		return Response.success(result);
	}

	
	
	
	
}
