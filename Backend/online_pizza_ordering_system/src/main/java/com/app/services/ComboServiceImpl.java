package com.app.services;

import java.util.Collections;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.daos.IComboDao;
import com.app.dtos.ComboDTO;
import com.app.dtos.DtoEntityConverter;
import com.app.entities.Combo;

@Transactional
@Service
public class ComboServiceImpl {

	@Autowired
	private IComboDao comboDao;
	
	@Autowired
	private DtoEntityConverter converter;
	
	public Map<String, Object> addComboDetails(ComboDTO comboDto)
	{
		System.out.println(comboDto);
		Combo combo = converter.toComboEntity(comboDto);
		
		combo = comboDao.save(combo);
		
		return Collections.singletonMap("changedRows", 1); 
	}
}
