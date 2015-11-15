define([], function () {
	return {

		preinit: function (node, args) {

		},

		init: function (node, args) {
			//kendo.bind($("#dataInput"), this.viewModel);
			return kendo.fx(node.children()).slideIn("right").play();
		},

		deinit: function (node) {
			return kendo.fx(node.children()).slideIn("right").reverse();
		},
		buildTemplate: function () {
			var template = kendo.template($('#templateTest').html());
			$('#simpleTemplateContent').append(template({ someText: this.viewModel.textField, dropDownValue: this.viewModel.dropDownValue }));
		},
		//viewModel: kendo.observable({
			dropValues: [
				{ Text: 'Test Value 1', Value: 1 },
				{ Text: 'Second Test Value', Value: 2 },
				{ Text: 'Some Third Value', Value: 3 },
			],
			dropDownValue: '1',
			textField: ''
		//})
	};
});