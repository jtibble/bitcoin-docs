define([], function(){
	var UTIL = {};

	
	UTIL.changeMainContent = function( controller, background ){
	   
		console.log( 'Changing main-content to controllers/'+controller );
		
		try{
			require([ 'controllers/' + controller ], function( c ){
				if( !c || !c.run ){
					throw 'Malformed controller: missing \'run\' method!';
				}
				
				c.run( '.main-content');
			});
		} catch(e){
			throw e.message;	
		}
	};
    
    UTIL.renderNavbar = function(){
        require(['text!templates/navbar.html'], function(template){
            
            navbarConfig = {
                'header': {
                    'type': 'link',
                    'text': 'CoinDocs',
                    'url': '#'
                },
                'body': [
                    {
                        'type': 'dropdown',
                        'text': 'Bitcoin Documentation',
                        'items': [
                            {
                                'type': 'link', 
                                'text': 'Documentation Home',
                                'url': '#api',
                            },
                            {
                                'type': 'link', 
                                'text': 'Core Protocol',
                                'url': '#api/bitcoin/core',
                            },
                            {
                                'type': 'link', 
                                'text': 'RPCs',
                                'url': '#api/bitcoin/rpc',
                            }
                        ]
                    },
                    {
                        'type': 'dropdown',
                        'text': 'Tutorials',
                        'items': [
                            {
                                'type': 'link', 
                                'text': 'Tutorials Home',
                                'url': '#tutorials ',
                            },
                            {
                                'type': 'link', 
                                'text': 'Moving to Bitcoin-CLI',
                                'url': '#tutorials/bitcoin/convertingToCLI',
                            }
                        ]
                    }
                ],
                'footer': {
                    'type': 'link',
                    'text': 'About CoinDocs',
                    'url': '#home/about'
                }
            };
            
            var renderedNavbar = _.template( template, {model: navbarConfig} );
            
            $('#navbar').html( renderedNavbar );
        });
    };
	
	return UTIL;
});