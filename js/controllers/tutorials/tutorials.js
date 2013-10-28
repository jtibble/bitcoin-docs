define(['text!templates/tutorials/tutorials.html'], function(template){
	
	return {
		run: function( container ){
			$( container ).html( template );
		}		
	};
});