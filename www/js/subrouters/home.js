/**
 * Subrouter for Home
 */
define( ['plugins/backbone/backbone.subroute'], 
	   function(headerTemplate) {
		
		return Backbone.SubRoute.extend({
			routes:{
				'' :		'emptyRoute',
				'*actions':	'runModule'
			},
			emptyRoute: function(){
				this.runModule( 'home');
			},
			runModule: function( module ){
				if( module !== 'home' ){
					module = 'home/' + module;
				}
                
                UTIL.renderNavbar();
				UTIL.changeMainContent( module );
			}
		});	
});
