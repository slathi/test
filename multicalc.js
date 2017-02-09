describe ("Testing two cases", function(){
	browser.get("https://juliemr.github.io/protractor-demo/");
	var number1 = element(by.xpath('/html/body/div/div/form/input[1]'));
	var number2 = element(by.model('second'));
	var goButton = element(by.id('gobutton'));
	var div = element(by.xpath("//option[@value='DIVISION']"));
	var mod = element(by.xpath("//option[@value='MODULO']"));
	var multiply = element(by.xpath("//option[@value='MULTIPLICATION']"));
	var subtract = element(by.xpath("//option[@value='SUBTRACTION']"));
	var result = element(by.xpath("//table[@class='table']//tr[1]//td[3]"));

	beforeEach(function(){
		//Input the numbers for every case
		number1.sendKeys(16);
		number2.sendKeys(4);
	});
	it ("should do addition", function(){
		//Performs addition
		goButton.click();	
		expect(result.getText()).toEqual('20');
	});
	it ("should do divison",function(){
		//Selects the division operator from menu
		div.click();
		goButton.click();
		expect(result.getText()).toEqual('4');
	});	
	it ("should work on modulous operator",function(){
		//Selects the modulus operator form the menu
		mod.click();
		goButton.click();
		expect(result.getText()).toEqual('0');
	});
	it ("should do multiplication",function(){
		//Selects the multiplication operator from menu
		multiply.click();
		goButton.click();
		expect(result.getText()).toEqual('64');
	});
	it("should do subtraction",function(){
		//Selects the subtraction operator from menu
		subtract.click();
		goButton.click();
		expect(result.getText()).toEqual('12');
	});
});