class OzonSceenUpPanel
	urlCss: "/"
	ozoneLogoCss: "#logo"
	basketLinkCss: ".bHeadBasket>a"
	searchInputCss: ".inputField input"
	searchButtonCss: ".searchButton"
	toBasketButtonCss: ".bOneTile .bBuyButton"
	productInBasketCss: ".js_in_cart"
	
	openOzonScreen: ->
		F.open @urlCss
	
	goToBasket: ->
		F(".bHeadBasket>a span").click()
		F.wait 10000
	
	typeTextToInput: (text)->(
		console.log text
		F(@searchInputCss).type(text)
		F(@searchButtonCss).click)
	
	sentFirstToBasket: ->
		F(@toBasketButtonCss).first.click
		numbOfProdinBasket = parseInt F(@productInBasketCss).text, 10
		return numbOfProdinBasket is 1
	
	