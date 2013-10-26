define(['text!templates/home/about.html'], function(template){
	
	return {
		run: function( container ){
			$( container ).html( template );
		}		
	};
});