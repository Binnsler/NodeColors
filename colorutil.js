

module.exports = {

luminosity: function(r,g,b){
	var rgbColor = 0.2126*r + 0.7152*g + 0.0722*b;
	return rgbColor;
},

darken: function(r,g,b){
	var newR = 0.8*r;
	var newG = 0.8*g;
	var newB = 0.8*b;

	return newR + ' ' + newG + ' ' + newB;

}

}