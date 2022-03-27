package com.app.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.dtos.SubCategoryDTO;
import com.app.entities.SubCategory;

public interface ISubCategoryDao extends JpaRepository<SubCategory, Integer>{

	@Modifying
	@Query(value = "select * from sub_category s where s.product_id = ?", 
	  nativeQuery = true)
	List<SubCategory> findByProductId(int productId);
	
//	@Modifying
//	@Query(value = "select * from sub_category s where s.product_id = ? and s.size = ? and s.crust_type = ?", 
//	  nativeQuery = true)
//	SubCategory findByProductIdAndSizeAndCrust(int productId,String size,String crustType);
	
	
}
