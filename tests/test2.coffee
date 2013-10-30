F.speed=400

		
describe 'clean Basket',->
	basket = new BasketScreen()
	it 'should open BASKET', ->
		new OzonSceenUpPanel().openOzonScreen()
		basket.verifyBasketScreen()
		