define(['text!templates/tutorials.html'], function(template){
	
	return {
		run: function( container ){
			$( container ).html( template );
		}		
	};
});