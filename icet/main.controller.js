sap.ui.controller("icet.main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf icet.main
*/
	onInit: function() {
		var btnOData = sap.ui.getCore().byId("btnOData");
		btnOData.attachPress(function() {
			var bus = sap.ui.getCore().getEventBus();
			bus.publish("nav", "to", { 
				id: "odata",
				data: { context: null }
			});
		});
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf icet.main
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf icet.main
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf icet.main
*/
//	onExit: function() {
//
//	}

});