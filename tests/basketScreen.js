	class basketScreen
	var myBasket = ".cartModule h1";
	var productsCss = ".cart-count";
	var checkAllProductsCss = ".h2 .check input";
	var deleteProductsCss = ".deleteFromCart";
	verifyBasketScreen:->
		return F(myBasket).visible();
		
	getNumberOfProducts: ->
		a= 	parseInt(F(productsCss).text(), 10);
		return parseInt(F(productsCss).text(), 10);
		
	verifyIsBasketEmpty: ->
		return getNumberOfProducts() == 0; 
		
	deleteAllProducts: ->
		F(checkAllProductsCss).click();
		F(deleteProductsCss).first().click();
		
	clearMyBasket: ->
		if !verifyIsBasketEmpty()
			deleteAllProducts()

		return verifyIsBasketEmpty()
		

		
			
