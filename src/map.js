const map = (input,mapFunction) => {
    var result = [];
	for ( let i = 0; i < input.length; i++){
	  var output = mapFunction(input[i]);
	  result.push(output);
	}
	return result;
}
module.exports = map;