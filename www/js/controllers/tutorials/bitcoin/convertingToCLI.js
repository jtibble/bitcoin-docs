define(['text!templates/tutorials/bitcoin/convertingToCLI.html'], function(template){
	
	return {
		run: function( container ){
			$( container ).html( template );
		}		
	};
});