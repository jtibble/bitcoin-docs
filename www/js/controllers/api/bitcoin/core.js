define(['text!templates/api/bitcoin/core.html'], function(template){
	
	return {
		run: function( container ){
			$( container ).html( template );
		}		
	};
});