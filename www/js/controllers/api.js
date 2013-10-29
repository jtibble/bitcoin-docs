define(['text!templates/api/api.html'], function(template){
	
	return {
		run: function( container ){
			$( container ).html( template );
		}		
	};
});