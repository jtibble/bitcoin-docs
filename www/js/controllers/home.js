define(['text!templates/home.html'], function(template){
	
	return {
		run: function( container ){
			$( container ).html( template );
		}		
	};
});