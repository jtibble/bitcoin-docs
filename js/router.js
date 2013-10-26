define(	'router', ['jquery', 'backbone', 'underscore'], function() {
		
        UTIL.Subrouters = [];
	
		// Create a new Backbone router object
		var Router = Backbone.Router.extend({
		
			// Routes evaluated most-to-least specific, with the last route becoming default
			// NOTE: Only edit this if your screen (or set of screens) does not have an existing subrouter!
			routes : {
				'home': 	'homeSubrouter',
				'wedding':	'weddingSubrouter',
				'bitcoin':	'bitcoinSubrouter',
				'umich':	'umichSubrouter',
				'robotics': 'roboticsSubrouter',
				'graphics': 'graphicsSubrouter',
			
				'*actions' : 	'unknownSubroute'
			},
			
			unknownSubroute : function( route ){
				
				if( !route ){
					console.log('Empty route, redirecting to home');
                	window.Router.navigate('home', {trigger: true});
					return;
				}
				
				var subrouter = route.split('/')[0];
				
				if( this.routes[ subrouter ] ){
					console.log('Unknown route \'' + route + '\', attempting to load subrouter');
					this.loadSubrouter( subrouter );
				} else {
					
					try{
						require(['controllers/'+route], function(controller){
							controller.run('.main-content');
						});
					} catch(e){
						console.log('Tried and failed to run controller without subrouter. Navigating home');
						window.Router.navigate( 'home', {trigger: true} );
					}
				}
				
			},
			
			homeSubrouter : function(subroute) {
				this.loadSubrouter( 'home' );
			},
			weddingSubrouter : function(subroute) {
				this.loadSubrouter( 'wedding' );
			},
			bitcoinSubrouter : function(subroute) {
				this.loadSubrouter( 'bitcoin' );
			},
			umichSubrouter : function(subroute) {
				this.loadSubrouter( 'umich' );
			},
			roboticsSubrouter : function(subroute) {
				this.loadSubrouter( 'robotics' );
			},
			graphicsSubrouter: function(subroute) {
				this.loadSubrouter( 'graphics' );
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
