/**
 * Subrouter for Home
 */
define( ['text!templates/headers/headerHomeTemplate.html', 
		 'plugins/backbone/backbone.subroute'], 
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
                
				UTIL.changeMainContent( module );
			}
		});	
});
