require.config({
	paths: {
		"jquery": "vendor/jquery/dist/jquery",
		"underscore": "vendor/underscore-amd/underscore",
		"backbone": "vendor/backbone-amd/backbone",
	}
});

require(['router']);


require(['views/app'], function(AppView){
	new AppView;
});

// var Router = Backbone.Router.extend({
// 	routes: {
// 		'': 'index',
// 		'app': 'app',
// 		'settings': 'settings'
// 	},
// 	index: function() {
// 		console.log('index page');
// 	}, 
// 	app: function() {
// 		console.log('app page');
// 	},
// 	settings: function() {
// 		console.log('settings page');
// 	}
// });

// var router = new Router();


// Backbone.history.start({pushState: true});

