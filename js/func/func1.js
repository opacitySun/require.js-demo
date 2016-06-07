

define(['jquery'],function($){
	var say = function(msg){
		var text = $("#text").text();
		alert(msg);
	}

	return {
		say : say
	};
});
