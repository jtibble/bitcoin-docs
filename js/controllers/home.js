define(['views/homeView'], function(HomeView){
	
	return {
		run: function( container ){
			var homeView = new HomeView( {el: container} );
		}		
	};
});