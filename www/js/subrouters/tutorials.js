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
				this.runModule( 'tutorials');
			},
			runModule: function( module ){
				if( module !== 'tutorials' ){
					module = 'tutorials/' + module;
				}
                
                UTIL.renderNavbar();
				UTIL.changeMainContent( module );
			}
		});	
});
