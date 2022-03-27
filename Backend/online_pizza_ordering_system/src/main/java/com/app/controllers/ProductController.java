package com.app.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.ComboDTO;
import com.app.dtos.ProductDTO;
import com.app.dtos.Response;
import com.app.dtos.SubCategoryDTO;
import com.app.dtos.ToppingDTO;
import com.app.entities.Combo;
import com.app.entities.Product;
import com.app.services.ComboServiceImpl;
import com.app.services.ProductServiceImpl;
import com.app.services.ToppingServiceImpl;

@CrossOrigin(origins = "*")
@RestController
public class ProductController {

	@Autowired
	private ComboServiceImpl comboService;
	@Autowired
	private ToppingServiceImpl toppingService;
	
	
	
	@Autowired
	private ProductServiceImpl productService;
	




//	@PostMapping("/product/add-combo")
//	public ResponseEntity<?> saveCombo(ComboFormDTO comboDto) {
//		Combo combo = converter.toComboEntity(comboDto);
//		String image = storageService.store(comboDto.getComboImage());
//		combo.setComboImage(image);
//		comboService.saveCombo(combo);
//		return Response.success(combo);
//	}

	@PostMapping("/product/add-combo")
	public ResponseEntity<?> addCombo(ComboDTO comboDto) {
		Map<String, Object> result = comboService.saveCombo(comboDto);
		return Response.success(result);
	}
	
	@GetMapping("/product/getall-combo")
	public ResponseEntity<?> getAllCombo()
	{
		List<Combo> productDtoList = comboService.getAllCombo();
		
		return Response.success(productDtoList);
	}
	
	
	
	@PostMapping("/product/add-topping")
	public ResponseEntity<?> addTopping(@RequestBody ToppingDTO toppingDto)
	{
		Map<String, Object> result = toppingService.addTopping(toppingDto);
		return Response.success(result);
	}
	
	
	
	@PostMapping("/product/add-product")
	public ResponseEntity<?> addProduct(ProductDTO productDto) {
		Product result = productService.saveProduct(productDto);
		return Response.success(result);
	}
	
//	@PutMapping("/product/edit-product")
//	public ResponseEntity<?> editProduct(ProductDTO productDto) {
//		Product product = converter.toProductEntity(productDto);
//		String image = storageService.store(productDto.getProductImage());
//		product.setProductImage(image);
//		product = productService.saveProduct(product);
//		return Response.success(product);
//	}
	
	
	@DeleteMapping("/product/delete-product/{productId}")
	public ResponseEntity<?> deleteProduct(@PathVariable("productId") int productId) {
		Map<String, Object> result = productService.deleteProduct(productId);
		return Response.success(result);
	}
	
	@PostMapping("/product/add-subcategory")
	public ResponseEntity<?> addSubCategory(@RequestBody SubCategoryDTO subCategoryDto)
	{
		Map<String, Object> result = productService.addSubCategory(subCategoryDto);
		if(result == null)
			return Response.error("sub-category already exist");
		return Response.success(result);
	}

	@GetMapping("/product/getall-vegproducts")
	public ResponseEntity<?> getAllVegProducts()
	{
		List<ProductDTO> productDtoList = productService.getAllVegProducts();
		
		return Response.success(productDtoList);
	}
	
	
	@GetMapping("/product/getall-nonvegproducts")
	public ResponseEntity<?> getAllNonVegProducts()
	{
		List<ProductDTO> productDtoList = productService.getAllNonVegProducts();
		
		return Response.success(productDtoList);
	}
	
	
//	@GetMapping("/product/get-subcategory/{productId}")
//	public ResponseEntity<?> getSubCategory(@PathVariable("productId") int productId)
//	{
//		List<SubCategoryDTO> subCategoryList = productService.getSubCategory(productId);
//		if(subCategoryList == null)
//			return Response.error("subCategory not found");
//		return Response.success(subCategoryList);
//	}
	
	@GetMapping("/product/get-defaultPrice/{productId}")
	public ResponseEntity<?> getDefaultPrice(@PathVariable("productId") int productId)
	{
		SubCategoryDTO subCategoryDto = productService.getDefaultPrice(productId);
		if(subCategoryDto == null)
			return Response.error("subCategory not found");
		return Response.success(subCategoryDto);
	}
	
	@PostMapping("/product/get-ProductPrice")
	public ResponseEntity<?> getProductPrice(@RequestBody SubCategoryDTO subCategoryDto)
	{
		SubCategoryDTO result = productService.getProductPrice(subCategoryDto);
		System.out.println(result);
		if(result == null)
			return Response.error("subCategory not found");
		return Response.success(result);
	}
}
