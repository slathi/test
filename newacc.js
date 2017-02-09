describe("create new account", function(){
	browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
	//Redirects to Home
	beforeEach(function(){
		element(by.buttonText("Home")).click();
	});	
	it("Should open manager's log-in", function(){
		//Open Bank Manager Log-in
		element(by.buttonText('Bank Manager Login')).click();
		//Adds new customer
		element(by.buttonText("Add Customer")).click();
		//Enter customer details
		element(by.model("fName")).sendKeys('Tom');
		element(by.model("lName")).sendKeys('Riddle');
		element(by.model("postCd")).sendKeys('12345');
		//Adds the new customer
		element(by.xpath("//button[@class='btn btn-default']")).click();
		//Wait for the pop-up to show
		var EC = protractor.ExpectedConditions;
		browser.wait(EC.alertIsPresent(), 10000);
		//Click OK on the pop-up
		browser.switchTo().alert().accept();
	});
	
	//Open account and sets the currency
	it("Should open account", function(){
		//Open Bank Manager Log-in
		element(by.buttonText('Bank Manager Login')).click();		
		//Selects the Customer name
		element(by.buttonText('Open Account')).click();
		element(by.xpath("//select[@id='userSelect']//option[@value='6']")).click();
		//Selects Currency
		element(by.xpath("//*[@value='Rupee']")).click();
	});
	
	it("Verify if account is opened", function(){
		//Open Bank Manager Log-in
		element(by.buttonText('Bank Manager Login')).click();
		//Selects Customers
		element(by.buttonText('Customers')).click();
		//Gets name of last added customer
		var customer = element(by.xpath("//*[text()='Tom']"));
		//Validates if the customer is existing or not
		expect(customer.getText()).toContain('Tom');
	});
});