F.speed = 5000
describe 'open  Basket',->
	it 'should open ozone', ->
		new OzonSceenUpPanel().openOzonScreen()
	it 'should open Basket', ->
		new OzonSceenUpPanel().goToBasket()
	
	