package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Order;

public interface IOrderDao extends JpaRepository<Order, Integer>{

}
