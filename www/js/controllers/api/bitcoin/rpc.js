define(['text!templates/api/bitcoin/rpc.html'], function(template){
	
	return {
		run: function( container ){
			$( container ).html( template );
		}		
	};
});