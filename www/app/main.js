define([
	'system/application',

	'app/displayPage'
],
function(Application, DisplayPage) {

	var MainApp = function() {
		Application.call(this, 'main');

		this.displayPage = new DisplayPage();

		this.displayPage.appendTo(this.$el);
	};

	MainApp.prototype = Object.create(Application.prototype);

	return MainApp;
});