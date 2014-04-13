sap.ui.jsview("icet.main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf icet.main
	*/ 
	getControllerName : function() {
		return "icet.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf icet.main
	*/ 
	createContent : function(oController) {
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl: "i18n/messageBundle.properties"
		});

		var btnToOData = new sap.m.Button ("btnOData", {
			text: "{i18n>OData}",
			press: [oController.gotoOData]
		})

		var oPage = new sap.m.Page({
			title: "{i18n>mainTitle}",
			content: [
				btnToOData,
			]
		});
		oPage.setModel(i18nModel, "i18n");

		return oPage;
	}

});