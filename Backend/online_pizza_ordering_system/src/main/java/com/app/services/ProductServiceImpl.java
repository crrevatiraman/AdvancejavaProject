package com.app.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.daos.IProductDao;


@Transactional
@Service
public class ProductServiceImpl {

	
	@Autowired
	private IProductDao productDao;
	
	
	

}
