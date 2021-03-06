sap.ui.controller("icet.odata", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf icet.odata
*/
	onInit: function() {
		var view = this.getViews();

		var pageOData = sap.ui.getCore().byId("pageOData");
		pageOData.attachNavButtonPress(function(){
			var bus = sap.ui.getCore().getEventBus();
			bus.publish("nav", "back");
		});

		var listPersons = sap.ui.getCore().byId("listPersons");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf icet.odata
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf icet.odata
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf icet.odata
*/
//	onExit: function() {
//
//	}

});