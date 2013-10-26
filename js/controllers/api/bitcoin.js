define(['text!templates/api/bitcoin/bitcoin.html'], function(template){
	
	return {
		run: function( container ){
			$( container ).html( template );
		}		
	};
});