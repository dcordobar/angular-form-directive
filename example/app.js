
angular.module('ExampleDcrForm',['dcrForm'])
.controller("homeController", function($scope){
	$scope.config = {
		bootstrap: true,
		formType: '',
		action: 'save.php',
		submitText: 'Enviar',
		fields: [
			{
				label: "Field 1",
				name: "field1",
				id: "field1",
				type: "text",
				value: "Valor campo 1"
			},
			{
				label: "Field 2",
				name: "field12",
				id: "field2",
				type: "text",
				value: "",
				placeholder: "Introduce un valor"
			}
		]
	};
});
