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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.AssignOrderDTO;
import com.app.dtos.CartDTO;
import com.app.dtos.FeedbackDTO;
import com.app.dtos.OrderDTO;
import com.app.dtos.Response;
import com.app.dtos.UserDTO;
import com.app.services.OrderServiceImpl;

@CrossOrigin(origins = "*")
@RestController
public class OrderController {

	@Autowired
	private OrderServiceImpl orderService;
	
	//get all orders in admin orders page
	@GetMapping("/order/getall-orders")
	public ResponseEntity<?> getAllOrders()
	{
		List<OrderDTO> orderDtoList = orderService.getAllOrders();
		if(orderDtoList != null)
			return Response.success(orderDtoList);
		return Response.error("no order available...");
	}
	
	//get pending orders in admin page
	@GetMapping("/order/get-pendingorders")
	public ResponseEntity<?> getPendingOrders()
	{
		List<OrderDTO> orderDtoList = orderService.getPendingOrders();
		if(orderDtoList != null)
			return Response.success(orderDtoList);
		return Response.error("no pending order available...");
	}
	
	
	@GetMapping("/order/get-deliveryboy")
	public ResponseEntity<?> getDeliveryBoy()
	{
		List<UserDTO> delBoyList = orderService.getDeliveryBoy();
		if(delBoyList != null)
			return Response.success(delBoyList);
		return Response.error("no delivery boy available...");
	}
	
	@PostMapping("/order/assign-deliveryboy")
	public ResponseEntity<?> assignDeliveryBoy(@RequestBody AssignOrderDTO assignOrderDto)
	{
		Map<String, Object> result = orderService.assignDeliveryBoy(assignOrderDto);
		return Response.success(result);
	}
	
	@PutMapping("/order/update-status/{orderId}")
	public ResponseEntity<?> updateOrderStatus(@PathVariable("orderId") int orderId,@RequestBody OrderDTO orderDto)
	{
		Map<String, Object> result = orderService.updateOrderStatus(orderId,orderDto);
		if(result != null)
			return Response.success(result);
		return Response.error("Delivery boy not assigned");
	}
	
	@PostMapping("/order/save-order")
	public ResponseEntity<?> saveOrder(@RequestBody OrderDTO orderDto)
	{
		Map<String, Object> result = orderService.saveOrder(orderDto);
		return Response.success(result);
	}
	
	
	@PostMapping("/order/add-feedback")
	public ResponseEntity<?> giveFeedback(@RequestBody FeedbackDTO feedbackDto) {
		Map<String, Object> result = orderService.saveFeedback(feedbackDto);
		return Response.success(result);
	}
	
	
	@GetMapping("/order/getall-feedback")
	public ResponseEntity<?> getAllFeedback()
	{
		List<FeedbackDTO> feedbackDtoList = orderService.getAllFeedback();
		
		return Response.success(feedbackDtoList);
	}
	
	
	@PostMapping("/order/addtocart")
	public ResponseEntity<?> addToCart(@RequestBody CartDTO cartDto)
	{
		Map<String,Object> result = orderService.addToCart(cartDto);
			if(result != null )
				return Response.success(result);
			return Response.error("error in add into cart");
	}
	
	
	@GetMapping("/order/getallcartitem/{userId}")
	public ResponseEntity<?> getAllCartItem(@PathVariable("userId") int userId)
	{
		CartDTO cartDto = orderService.getAllCartItem(userId);
		if(cartDto != null)
			return Response.success(cartDto);
		return Response.error("cart is empty");
		
	}
	
	
	@PutMapping("/order/increment-quantity/{cartDetailId}")
	public ResponseEntity<?> incrementQuantity(@PathVariable("cartDetailId") int cartDetailId)
	{
		Map<String,Object> result = orderService.incrementQuantity(cartDetailId);
		return Response.success(result);
	}
	
	@PutMapping("/order/decrement-quantity/{cartDetailId}")
	public ResponseEntity<?> decrementQuantity(@PathVariable("cartDetailId") int cartDetailId)
	{
		Map<String,Object> result = orderService.decrementQuantity(cartDetailId);
		if(result != null)
			return Response.success(result);
		return Response.error("can't decrement");
	}
	
	@DeleteMapping("/order/delete-item/{cartDetailId}")
	public ResponseEntity<?> deleteFromCart(@PathVariable("cartDetailId") int cartDetailId)
	{
			orderService.deleteFromCart(cartDetailId);
				return Response.success("deleted...");
	}
	
	//get all orders by userId
	@GetMapping("/order/getall-custorders/{userId}")
	public ResponseEntity<?> getAllCustomerOrder(@PathVariable("userId") int userId)
	{
		List<OrderDTO> orderDtoList = orderService.getAllCustomerOrder(userId);
		if(orderDtoList != null)
			return Response.success(orderDtoList);
		return Response.error("no order available...");
	}
	
	//get pending orders in customer page
		@GetMapping("/order/getcustomer-pendingorders/{userId}")
		public ResponseEntity<?> getCustomerPendingOrders(@PathVariable("userId") int userId)
		{
			List<OrderDTO> orderDtoList = orderService.getCustomerPendingOrders(userId);
			if(orderDtoList != null)
				return Response.success(orderDtoList);
			return Response.error("no pending order available...");
		}
		
	
}
