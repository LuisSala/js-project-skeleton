describe("BasicTest", function(){
	
	it("has equal values", function(){
		expect(true).toEqual(true);
	});
	
	it("has a moduleProperty with value '12345'", function() {
		expect(SampleProject.moduleProperty).toEqual(12345);
	});
	
	it("has a callPrivateMethod() that returns 'hello'", function() {
		expect(SampleProject.callPrivateMethod()).toEqual('hello');
	});
	
});