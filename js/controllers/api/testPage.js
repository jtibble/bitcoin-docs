define(['text!templates/api/testPage.html'], function(template){
	
	return {
		run: function( container ){
			$( container ).html( template );
		}		
	};
});