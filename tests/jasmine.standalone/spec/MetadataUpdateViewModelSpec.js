/**/
describe("MetadataUpdateViewModel spec suite.", function(){
	it("Should call the plugin to map the JSON to ViewModel with observers", function(){
		spyOn(ko.mapping, "fromJS");
		var metadataUpdateModel = jasmine.createSpy('metadataUpdateModel');
		
		new MetadataUpdateViewModel(metadataUpdateModel);
		
		expect(ko.mapping.fromJS).toHaveBeenCalled();
	});
	xit("Should call the plugin to map the ViewModel to JSON", function(){
		var metadataUpdateModel = jasmine.createSpy('metadataUpdateModel');
		
		spyOn(ko, "toJS");
		spyOn(MetadataUpdateViewModel, "setCheckObserver")
		
		new MetadataUpdateViewModel(metadataUpdateModel).couldSend();
		
		expect(ko.toJS).toHaveBeenCalled();
	});
});