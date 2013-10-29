define(['text!templates/api.html'], function(template){
	
	return {
		run: function( container ){
			$( container ).html( template );
		}		
	};
});