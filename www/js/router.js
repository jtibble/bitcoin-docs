define(	'router', ['jquery', 'backbone', 'underscore'], function() {
		
        UTIL.Subrouters = [];
	
		// Create a new Backbone router object
		var Router = Backbone.Router.extend({
		
			// Routes evaluated most-to-least specific, with the last route becoming default
			// NOTE: Only edit this if your screen (or set of screens) does not have an existing subrouter!
			routes : {
				'home': 	'homeSubrouter',
                'api':      'apiSubrouter',
                'tutorials':      'tutorialsSubrouter',
				'*actions' : 	'unknownSubroute'
			},
			
			unknownSubroute : function( route ){
				
                // If supplied with empty route, go home
				if( !route ){
					console.log('Empty route, redirecting to home');
                	window.Router.navigate('home', {trigger: true});
					return;
				}
				
				var subrouter = route.split('/')[0];
				
                // Optimistically try to load the subrouter
				if( this.routes[ subrouter ] ){
					console.log('Unknown route \'' + route + '\', attempting to load subrouter');
					this.loadSubrouter( subrouter );
				} else {
					
                    // If the subrouter hasn't been set up, just try to run as a straight controller
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
				
			},
			
			homeSubrouter : function(subroute) {
				this.loadSubrouter( 'home' );
			},
			apiSubrouter : function(subroute) {
				this.loadSubrouter( 'api' );
			},
			tutorialsSubrouter : function(subroute) {
				this.loadSubrouter( 'tutorials' );
			},
			
			loadSubrouter : function( subrouterName ){
				if( UTIL.Subrouters[ subrouterName ] ){
					console.log('No subrouter found by this name');
					return;
				}
				
                require([ 'subrouters/' + subrouterName ], function( subrouter ){
					console.log( 'Subrouter \'' + subrouterName + '\' loaded' );
                    UTIL.Subrouters[ subrouterName ] = new subrouter( subrouterName );
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
