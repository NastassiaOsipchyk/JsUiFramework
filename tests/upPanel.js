class OzonSceenUpPanel
	@urlCss = "/ozon"
	@ozoneLogoCss = "#logo"
	@basketLinkCss = ".bHeadBasket>a"
	@searchInputCss = ".inputField input"
	@searchButtonCss = ".searchButton"
	@toBasketButtonCss = ".bOneTile .bBuyButton"
	@productInBasket = ".js_in_cart"
	
	constructor:->
		
	openOzonScreen: ->
		//"/ozon = "www.ozon.ru" you can find it in config file "procsies"
		F.open(@url)

	goToBasket:()->
		F(@basketLink).click()
		return F(@ozoneLogoCss).visible()
	
	typeTextToInput: (text)->
		F(@searchInputCss).type(text)
		F(@searchButtonCss).click()
	
	sentToBusket: ()->
		F(@toBasketButtonCss).first().click()
		numbOfProdinBasket = parseInt(F(productInBasket).text(), 10)
		return numbOfProdinBasket == 1
	