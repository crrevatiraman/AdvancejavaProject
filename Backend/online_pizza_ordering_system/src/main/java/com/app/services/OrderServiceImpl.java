package com.app.services;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.daos.IAssignOrderDao;
import com.app.daos.IComboDao;
import com.app.daos.IFeedbackDao;
import com.app.daos.IOrderDao;
import com.app.daos.IOrderDetailDao;
import com.app.daos.IProductDao;
import com.app.daos.IToppingDao;
import com.app.daos.IUserDao;
import com.app.dtos.AssignOrderDTO;
import com.app.dtos.DtoEntityConverter;
import com.app.dtos.FeedbackDTO;
import com.app.dtos.OrderDTO;
import com.app.dtos.UserDTO;
import com.app.entities.AssignOrder;
import com.app.entities.Combo;
import com.app.entities.Feedback;
import com.app.entities.Order;
import com.app.entities.OrderDetail;
import com.app.entities.Product;
import com.app.entities.Topping;
import com.app.entities.User;

@Transactional
@Service
public class OrderServiceImpl {

	@Autowired
	private IOrderDao orderDao;
	@Autowired
	private IUserDao userDao;
	@Autowired
	private IProductDao productDao;
	@Autowired
	private IComboDao comboDao;
	@Autowired
	private IToppingDao toppingDao;
	@Autowired
	private IAssignOrderDao assignOrderDao;
	@Autowired
	private IOrderDetailDao orderDetailDao;
	@Autowired
	private DtoEntityConverter converter;
	@Autowired
	private IFeedbackDao feedbackDao;
	
	public List<OrderDTO> getAllOrders()
	{
		List<OrderDTO> orderDtoList = new ArrayList<>();
		List<Order> orderList = orderDao.findAll();
		for (Order order: orderList) {
			
				orderDtoList.add(converter.toOrderDto(order));	
		}
		
		return orderDtoList;
	}
	
	public List<OrderDTO> getPendingOrders()
	{
		List<OrderDTO> orderDtoList = new ArrayList<>();
		List<Order> orderList = orderDao.findAll();
		for (Order order: orderList) {
			if(!(order.getStatusType().equals("Completed")))
			{
				orderDtoList.add(converter.toOrderDto(order));	
			}
		}
		
		return orderDtoList;
		
	}
	
	public List<UserDTO> getDeliveryBoy()
	{
		List<User> empList = userDao.findFreeEmp();
		//System.out.println(empList);
		if(empList != null)
		{
			List<UserDTO> empDtoList = new ArrayList<>();
			for (User user : empList) {
				empDtoList.add(converter.toUserDto(user));
			
			}
			return empDtoList;
		}
		return null;
	}
	
	public Map<String,Object> assignDeliveryBoy(AssignOrderDTO assignOrderDto)
	{
		Order order = orderDao.getById(assignOrderDto.getOrderId());
		AssignOrder assign = new AssignOrder();
		assign.setOrder(order);
		User emp =  userDao.getById(assignOrderDto.getUserId());
		emp.setIsFree(true);
		assign.setUser(emp);
		assign = assignOrderDao.save(assign);
			return Collections.singletonMap("Assigned id", assign.getAssignId());
	
	}
	

	
	public Map<String, Object> saveOrder(OrderDTO orderDto)
	{
		User user = userDao.getById(orderDto.getUser().getUserId());
		Order order = new Order();
		order.setPaymentMode(orderDto.getPaymentMode());
		order.setStatusType(orderDto.getStatusType());
		order.setTotalAmount(orderDto.getTotalAmount());
		order.setUser(user);
	
		order = orderDao.save(order);
		
		
		if(orderDto.getOrderDetailList() != null)
		{
			for (OrderDetail od : orderDto.getOrderDetailList()) {
				OrderDetail orderDetail = new OrderDetail();
				if(od.getProduct() != null)
				{
					Product product = productDao.getById(od.getProduct().getProductId());
					orderDetail.setProduct(product);
				}
				if(od.getCombo() != null)
				{
					Combo combo = comboDao.getById(od.getCombo().getComboId());
					orderDetail.setCombo(combo);
				}
				if(od.getTopping() != null)
				{
					Topping topping = toppingDao.getById(od.getCombo().getComboId());
					orderDetail.setTopping(topping);
				}
				orderDetail.setOrder(order);
				orderDetail.setAmount(od.getAmount());
				orderDetail.setQuantity(od.getQuantity());
				orderDetail = orderDetailDao.save(orderDetail);
			}
		}
		return Collections.singletonMap("inserted id", order.getOrderId());
		
	}
	
	public Map<String, Object> saveFeedback(FeedbackDTO feedbackDto){
		Feedback feedback = converter.toFeedbackEntity(feedbackDto);
		//Feedback feedback = new Feedback();
		//feedbackDto.getOrderId();
		User user = userDao.getById(feedbackDto.getUserId());
		Order order = orderDao.getById(feedbackDto.getOrderId());
		
		feedback.setOrder(order);
		feedback.setUser(user);
		
		feedback = feedbackDao.save(feedback);
		
		return Collections.singletonMap("Inserted id", feedback.getFeedbackId());
	}
	
	
	public List<FeedbackDTO> getAllFeedback()
	{
		List<Feedback> feedbackList = feedbackDao.findAll();
		List<FeedbackDTO> feedbackDtoList = new ArrayList<>();
		
		for (Feedback feedback : feedbackList) {
			feedbackDtoList.add(converter.toFeedbackDto(feedback));
		}
		return feedbackDtoList;
	}
	
}
