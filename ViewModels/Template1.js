define([], function () {
    return {
        
        preinit: function (node, args) {

        },

        init: function (node, args) {
        	return kendo.fx(node.children()).slideIn("right").play();
        },

        deinit: function (node) {
            return kendo.fx(node.children()).slideIn("right").reverse();
        },
        buildTemplate: function() {
	        var someText = $('#someText').val();
            var template = kendo.template('Hello Templates!</br>Sample Text: <span style="color:red;">#:data.someText#</span>');
            $('#simpleTemplateContent').html(template({ someText: someText }));
		}
    };
});