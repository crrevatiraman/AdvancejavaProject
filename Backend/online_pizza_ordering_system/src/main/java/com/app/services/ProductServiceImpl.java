package com.app.services;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.daos.IProductDao;
import com.app.daos.ISubCategoryDao;
import com.app.dtos.DtoEntityConverter;
import com.app.dtos.SubCategoryDTO;
import com.app.entities.Product;
import com.app.entities.SubCategory;


@Transactional
@Service
public class ProductServiceImpl {

	
	@Autowired
	private IProductDao productDao;
	
	@Autowired
	private ISubCategoryDao subCategoryDao;
	
	@Autowired
	private DtoEntityConverter converter;
	
	
	public Product saveProduct(Product product) {
		return productDao.save(product);
	}
	
	
	public Map<String, Object> addSubCategory(SubCategoryDTO subCategoryDto)
	{
		//System.out.println(subCategoryDto);
		boolean flag = true;
		List<SubCategory> list= subCategoryDao.findByProductId(subCategoryDto.getProductId());
		for (SubCategory s : list) {
			if(s.getCrustType().equals(subCategoryDto.getCrustType()) && s.getSize().equals(subCategoryDto.getSize()))
			{
				flag = false;
			}
		}
		if(flag == true)
		{
		SubCategory subCategory = new SubCategory();
		subCategory.setCrustType(subCategoryDto.getCrustType());
		subCategory.setSubCategoryId(subCategoryDto.getSubCategoryId());		
		subCategory.setPrice(subCategoryDto.getPrice());
		subCategory.setSize(subCategoryDto.getSize());
		subCategory.setProduct(subCategoryDto.getProduct());

		subCategoryDao.save(subCategory);
		return Collections.singletonMap("InsertedRows", 1);
		}
		else
			return null;
	}

}
