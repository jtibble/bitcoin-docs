define(['text!templates/home/home.html'], function(template){
	
	return {
		run: function( container ){
			$( container ).html( template );
		}		
	};
});