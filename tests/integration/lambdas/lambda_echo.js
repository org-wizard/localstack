exports.handler = function(event, context, callback) {
	
	var result = {context};
	if (callback) {
		callback(null, result);
	} else {
		context.succeed(result);
	}
};
