(function( angular ) {
	'use strict';

	angular.module('dcrForm',[])
	.directive('dcrForm', function(){
		return {
			restrict: 'E',
			scope: {
				config: '='
		    },
		    template: "<form action='{{config.action}}' ng-class=" + '"' + "{'form-horizontal': config.formType == 'horizontal', 'form-inline': config.formType == 'inline'}" + '"' + ">" +
		    		  "<div ng-repeat='field in config.fields' class='form-group'>" +
					  "<label class='control-label'>{{field.label}}</label>" +
					  "<input type='{{field.type}}' " +
					  		  "name='{{field.name}}' " +
					  		  "id='{{field.id}}' " +
					  		  "value='{{field.value}}' " +
				   			  "class='form-control' " +
				   			  "placeholder='{{field.placeholder}}' />" +
					  "</div>" +
					  "<button type='submit' class='btn btn-success'>{{config.submitText}}</button>" +
					  "</form>"
		  };
	});
}( angular ));
