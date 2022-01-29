package com.app.services;



import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.daos.IComboDao;
import com.app.dtos.DtoEntityConverter;
import com.app.entities.Combo;

@Transactional
@Service
public class ComboServiceImpl {

	@Autowired
	private IComboDao comboDao;
	
	@Autowired
	private DtoEntityConverter converter;
	

	
	public Combo saveCombo(Combo combo) {
		return comboDao.save(combo);
	}
	
}


