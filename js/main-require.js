
require.config({
    baseUrl: 'js',
    paths: {
        jquery:'lib/jquery-1.9.1.min',
        //lib:'lib',
        func:'func'
    }/*,
    shim: {
        "jquery":["jquery"],
        "boostrap":{
            deps:["jquery"],
            exports:"Boostrap",
            init:function(){

            }
        }
    }*/
});

/*
require(["jquery","func/func1"],function($,func1) {
    alert($("#text").text());
});
*/
