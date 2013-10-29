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
				this.runModule( 'api');
			},
			runModule: function( module ){
				if( module !== 'api' ){
					module = 'api/' + module;
				}
                
                UTIL.renderNavbar();
				UTIL.changeMainContent( module );
			}
		});	
});
