
// Start the main app logic.
require(["main-require"],function(){
	require(["jquery","func/func1"],function($,func1) {
	    func1.say('text的内容');
	    //alert($("#text").text());
	});
});

