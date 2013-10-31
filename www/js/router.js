define(	'router', ['jquery', 'backbone', 'underscore'], function() {
		
        UTIL.Subrouters = [];
	
		// Create a new Backbone router object
		var Router = Backbone.Router.extend({
		
			// Routes evaluated most-to-least specific, with the last route becoming default
			// NOTE: Only edit this if your screen (or set of screens) does not have an existing subrouter!
			routes : {
				'*actions' : 	'allRoutes'
			},
			
			allRoutes : function( route ){
				
                // If supplied with empty route, go home
				if( !route ){
					console.log('Empty route, redirecting to home');
                	window.Router.navigate('home', {trigger: true});
					return;
				}
				
				var subrouter = route.split('/')[0];
									
                // Try to run the route as a controller
                //  ...failing that, show the boring HTML itself
                require(['controllers/'+route], function(controller){
                    controller.run('.main-content');
                }, function(err){
                    console.log('Tried and failed to run controller without subrouter. Trying to load template');
                    require(['text!templates/'+ route + '.html'], function( template ){
                        UTIL.renderNavbar();
                        $('.main-content').html( template ); 
                    });
                });
				
			}
		});
	
		return {
			initialize : function() {
				window.Router = new Router();
			}
		};
	
	}
);
