define([], function(){
	var UTIL = {};

	
	UTIL.changeMainContent = function( controller, background ){
	   
		console.log( 'Changing main-content to controllers/'+controller );
		
		try{
			require([ 'controllers/' + controller ], function( c ){
				if( !c || !c.run ){
					throw 'Malformed controller: missing \'run\' method!';
				}
				
				c.run( '.main-content');
			});
		} catch(e){
			throw e.message;	
		}
	};
    
    UTIL.changeNavbar = function( route ){
        require(['text!templates/navbar.html'], function(template){
            var renderedNavbar = _.template( template, {model: {route: route}} );
            $('#navbar').html( renderedNavbar );
        });
    };
	
	return UTIL;
});