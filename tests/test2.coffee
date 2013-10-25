F.speed=400
describe 'open  Basket',->
	ozon = new OzonSceenUpPanel()
	basket = new BasketScreen()
	it 'should open ozone', ->
		new OzonSceenUpPanel().openOzonScreen()
	it 'should open Basket', ->
		new OzonSceenUpPanel().goToBasket()
	
	it 'clear my Basket', ->
		basket.clearMyBasket()
	it 'type Совершенный код in input', ->
		ozon.typeTextToInput("Совершенный код")
	it 'sent first to basket', ->
		ozon.sentFirstToBasket()
	it 'go to basket', ->
		ozon.goToBasket()
	it 'clear my basket', ->
		basket.clearMyBasket()
		