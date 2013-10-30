class BasketScreen
	myBasket: ".cartModule h1"
	productsCss: ".cart-count"
	checkAllProductsCss: ".h2 .check input"
	deleteProductsCss: ".deleteFromCart"

	openBasket:->
		F.open "/context/cart" 
		
	verifyBasketScreen: ->
		console.log F(".cartModule").attr("id")
		console.log document.title
		
	getNumberOfProducts: ->
		a = F(".cart-count").text()
		
	verifyIsBasketEmpty: ->
		return @verifyBasketScreen()
	deleteAllProduct: ->
		F(@checkAllProductsCss).click
		F(@deleteProductsCss).first().click
		
	clearMyBasket: ->
		console.log "hi"
		a = @verifyIsBasketEmpty()
		console.log "hi1"
		if not a
			deleteAllProducts()
		return @verifyIsBasketEmpty()
		

		
			
