define(['backbone'], function(Backbone) {
var Router = Backbone.Router.extend({
	routes: {
		'': 'index',
		'app': 'app',
		'settings': 'settings'
	},
	index: function() {
		router.navigate('index');
	}, 
	app: function() {
		console.log('app');
		this.navigate('app.html');
	},
	settings: function() {
		console.log('settings page');
	}
});

var router = new Router();


// Backbone.history.start({pushState: true});
Backbone.history.start();
});