package com.app.dtos;

import com.app.entities.CartDetail;

public class CartDTO {

	private int cartId;
	private double totalAmount;
	private int userId;
	private CartDetail cartDetail;

	
	
	

	public CartDTO() {
	}

	public CartDTO(int cartId, double totalAmount, int userId, CartDetail cartDetail) {
		this.cartId = cartId;
		this.totalAmount = totalAmount;
		this.userId = userId;
		this.cartDetail = cartDetail;
	}

	public int getCartId() {
		return cartId;
	}

	public void setCartId(int cartId) {
		this.cartId = cartId;
	}

	public double getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(double totalAmount) {
		this.totalAmount = totalAmount;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	

	public CartDetail getCartDetail() {
		return cartDetail;
	}

	public void setCartDetailList(CartDetail cartDetail) {
		this.cartDetail = cartDetail;
	}

	@Override
	public String toString() {
		return String.format("CartDTO [cartId=%s, totalAmount=%s, userId=%s, cartDetail=%s]", cartId, totalAmount,
				userId, cartDetail);
	}

	
	
	
}
