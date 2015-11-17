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
		buildTemplate: function () {
			this.tableData.push({ someText: this.textField, dropDownValue: this.dropDownValue });
		},
		dropValues: [
			{ Text: 'Test Value 1', Value: 1 },
			{ Text: 'Second Test Value', Value: 2 },
			{ Text: 'Some Third Value', Value: 3 },
		],
		dropDownValue: '1',
		textField: '',
		tableData: []
	};
});