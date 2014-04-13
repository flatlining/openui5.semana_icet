sap.ui.controller("icet.app", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf icet.app
*/
	onInit: function() {
		var view = this.getView();

		this.app = view.byId("icetApp");
		
		var bus = sap.ui.getCore().getEventBus();
        bus.subscribe("nav", "to", this.navToHandler, this);
        bus.subscribe("nav", "back", this.navBackHandler, this);
	},

	navToHandler: function(channelId, eventId, data) {
		alert(this.app);
		if (data && data.id) {
			if (this.app.getPage(data.id) === null) {
				jQuery.sap.log.error("[ICET] now loading page: " + data.id);
				this.app.addPage(sap.ui.jsview(data.id, "icet." + data.id));
			}
			this.app.to(data.id, data.data.context);
		} else {
			jQuery.sap.log.error("[ICET] nav-to invalid data: " + data);
		}
	},

	navBackHandler: function() {
		this.app.back();
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf icet.app
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf icet.app
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf icet.app
*/
//	onExit: function() {
//
//	}

});