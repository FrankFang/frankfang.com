require.config({
	paths: {
		"jquery": "vendor/jquery-1.9.1.min",
		"underscore": "vendor/underscore-min",
		"backbone": "vendor/backbone-min"
	},
	shim: {
		'underscore':{
			exports: '_'
		},
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'jquery':{
			exports: '$'
		}
	}
});

require(['jquery', 'underscore', 'backbone'], function ($, _, Backbone){
	console.log($.trim('sdl   '));
});