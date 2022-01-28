package com.app.controllers;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.ComboDTO;
import com.app.dtos.Response;
import com.app.services.ComboServiceImpl;

@CrossOrigin(origins = "*")
@RestController
public class ProductController {

	//@Autowired
	private ComboServiceImpl comboService;

	public ProductController(ComboServiceImpl comboService) {
		this.comboService = comboService;
	}
	
	
	@PostMapping("/product/add-combo")
	public ResponseEntity<?> addComboDetails(@ModelAttribute ComboDTO comboDto)
	{
		 Map<String, Object> result = comboService.addComboDetails(comboDto);
		 
		 return Response.success(result);
		
	}
	
}
