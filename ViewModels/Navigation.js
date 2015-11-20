define([], function () {
    return {
        
        preinit: function (node, args) {

        },

        init: function (node, args) {
            
        },

        deinit: function (node) {
            
        },

        go_home: function (e) {
            window.app.navigate("Home");
        },

        go_Temp1: function (e) {
            window.app.navigate("Template1");
        },
        go_Temp2: function (e) {
        	window.app.navigate("Template2");
        },
    	go_Temp3: function (e) {
    		window.app.navigate("Template3");
		}
    };
});