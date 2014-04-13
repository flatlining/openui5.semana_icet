sap.ui.jsview("icet.app", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf icet.app
	*/ 
	getControllerName : function() {
		return "icet.app";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf icet.app
	*/ 
	createContent : function(oController) {
		var app = new sap.m.App("icetApp");

		app.addPage(sap.ui.view({id:"mainPageView", viewName:"icet.main", type:sap.ui.core.mvc.ViewType.JS}));
		
		//app.addPage(sap.ui.jsview("mainPageView", "icet.main"));
		//app.addPage(sap.ui.jsview("odataPageView", "icet.odata"));

		return app;
	}

});