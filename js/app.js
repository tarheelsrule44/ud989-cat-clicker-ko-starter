var initialCats = [
	{
		clickCount : 0,
		name : 'Tabby',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		nicknames: ['Tabtab', 'T-Bone', 'Mr. T', 'Tabs']
	},
	{
		clickCount : 0,
		name : 'Tiger',
		imgSrc : 'img/4154543904_6e2428c421_z.jpg',
		nicknames: ['Tigger']
	},
	{
		clickCount : 0,
		name : 'Scaredy',
		imgSrc : 'img/22252709_010df3379e_z.jpg', 
		nicknames : ['Casper']
	},	
	{
		clickCount : 0,
		name : 'Shadow',
		imgSrc : 'img/1413379559_412a540d29_z.jpg',
		nicknames: ['Shooby']
	},
	{
		clickCount : 0,
		name : 'Sleepy',
		imgSrc : 'img/9648464288_2516b35537_z.jpg',
		nicknames : ['Zzzz']
	}
]

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.nicknames = ko.observableArray(data.nicknames);

	this.title = ko.computed(function(){
		var title;
		var clicks = this.clickCount();
		if (clicks < 10){
			title = 'Newborn';
		} else if (clicks < 50) {
			title = "Infant";
		} else if (clicks < 100) {
			title = "Teen";
		} else if (clicks < 500) {
			title = "Adult";
		} else {
			title = "ninja";
		}
		return title;
	}, this);
}

var ViewModel = function() {	
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push( new Cat(catItem) );
	});

	this.currentCat = ko.observable( this.catList()[0] );

	this.incrementCounter = function() {
		this.clickCount(this.clickCount()+1);
	};

	this.setCat = function(clickedCat) {
		self.currentCat(clickedCat)
	};
}

ko.applyBindings(new ViewModel());