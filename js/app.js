var Cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('tom');
	this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
	this.nickNames = ko.observableArray(['Tomcat', 'Tabby', 'Thomas'])
	this.title = ko.computed(function(){
		var title;
		var clicks = this.clickCount();
		if (clicks<5) {
			title = 'Newborn';
		} else if (clicks>4){
			title = 'Adult';
		}
		return title;
	}, this)
}

var viewModel = function() {
	this.currentCat = ko.observable( new Cat());
	this.incrementCounter = function() {
		this.currentCat().clickCount(this.currentCat().clickCount() + 1);
	};
}

ko.applyBindings(new viewModel());
