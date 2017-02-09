describe ('To check if the name functionality is working', function(){
	it ('should automatically type name', function(){
		browser.get ('http://www.angularjs.org/');
		
		element(by.model('yourName')).sendKeys('Rooney');
		
		var greeting = element(by.binding('yourName'));
	expect(greeting.getText()).toEqual('Hello Rooney!');
	});
});