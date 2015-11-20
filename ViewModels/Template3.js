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
			this.tableData.push({ someText: this.textField, dropDownValue: this.dropDownValue, arrayDropDownValue: null });
		},
		dropValues: [
			{ Text: 'Test Value 1', Value: 1 },
			{ Text: 'Second Test Value', Value: 2 },
			{ Text: 'Some Third Value', Value: 3 },
		],
		arrayDropValues: [
			{ Text: '10', Value: 10 },
			{ Text: '20', Value: 20 },
			{ Text: '30', Value: 50 },
		],
		dropDownValue: '1',
		textField: '',
		tableData: [],
		tableDataSum: function () {
			var total = 0;
			this.get('tableData').forEach(function(i) {
				total += i.arrayDropDownValue ? i.arrayDropDownValue.Value : 0;
			});
			return total;
		}
	};
});