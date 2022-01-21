### Requirements

#### 1. Admin
##### Login page  
    * Forgot password
    * Signin
    * Redirect to Menu page(After sucessful login)

##### Add Toppings page  
    * Add toppings
    * Redirection to menu page(cancel button)
    * Logout

##### Add Combos page  
    * Add combos
    * Redirection to menu page(cancel button)
    * Logout

##### Add Product page  
    * Add product
    * Redirection to menu page(cancel button)
    * Logout

##### Edit Product page  
    * Update product details
    * Redirection to menu page(cancel button)
    * Logout

##### Customer Feedbacks page  
    * Get List of all customer feedbacks
    * Redirection to menu page(Menu button)
    * Logout

##### Search Page
    * Search employee by email (if found then show employee details)
    * Redirection to Update Employee Details page (Update button)
    * Redirection to menu page(Menu button)

##### Update Employee Details page  
    * Update employee details(update button)
    * Redirection to Search page(cancel button)
   

##### Menu Page 
    * Add product
    * Edit product(button on each product)
    * Delete product(button on each product)
    * Add toppings
    * Add combos
    * Logout
    * Update Employee Details(button)
    * Show customer feedbacks(feedbacks button) 
    * Search menu by category (veg/non-veg)
    * Get all orders  (orders button)
    
    
##### Orders Page
    * Logout
    * Redirect to menu page (menu button)
    * Get customer orders details
    * Get customer details 
    * Get and update status
    * Assign delivery boy(Employee)


-----------------------------------------------------    

#### 2. Customer

##### Login page  
    
    * Login
    * Forgot password
    * Register here link
    * Redirect to menu page(After successful login)

##### Register page 
    * Register
    * Login here link
    * Redirect to login page(After successful registration)

##### Menu Page
    * Logout (button)
    * Update profile (button)
    * My orders (button)
    * Search menu by price,name,size,category
    * Offers
    * Like product
    * Add to cart
    * Toppings popup page(to add toppings after click on add to cart button)
    * Redirect to cart page (cart button)

##### Cart Page
    * Logout
    * redirct to menu page(menu button)
    * get product details (which selects in cart)
    * increase or decrease product quantites(+ or -)
    * Get total amount of cart product
    * redirect to checkout page (proceed button)
     
##### Checkout Page
    * Get total amount of cart product
    * Logout
    * Redirect to menu page(menu button)
    * Add address
    * Placed order

##### Payment Page
    * Select mode of payment(card,UPI,cash)
    * Logout
    * Redirection to orders page and send email to customer (pay button)

##### Order Page
    * Logout
    * Redirect to menu page(menu button)
    * Redirect to feedback page(feedback button)
    * Get order details
    * Redirect to tracking page (by clicking on orderid link)

##### Feedback Page
    * Logout
    * Add feedback
    * Redirect to menu page(menu button)

##### Tracking Page    
    * Logout
    * redirct to menu page(menu button)
    * get status of order
-----------------------------------------------------  

#### 3. Employee

##### Login page 
    * Login
    * Forgot password
    * Register here link
    * Redirect to Orders page(After successful login)

##### Register page 
    * Register
    * Login here link
    * Redirect to login page

##### Orders Page
    * Get Order details
    * Get payment mode
    * Get Customer details
    * update delivery status(delivered button)
    * Logout
------------------------------
##### Database Tables
    * customer
    * employee
    * delivery_boy
    * address
    * feedback
    * order
    * amount
    * product
    * status
    * linking_tbl (for link order and product)

------------------------------
