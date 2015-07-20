var request = require('request');
var _ = require('underscore');

request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function(error, response, body){
	if(!error && response.statusCode === 200){
		var parseJSON = JSON.parse(body);

		var theColor = _.find(parseJSON, function(element){
			return element.name.toLowerCase() === process.argv[2].toLowerCase();
		});

		var theColorRgb =  theColor.rgb.r + ' ' + theColor.rgb.g + ' ' + theColor.rgb.b;
	}
		console.log(theColorRgb)

})