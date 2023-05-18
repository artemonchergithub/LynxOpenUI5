sap.ui.define([
		"zjblessons/FirstWorklist/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("zjblessons.FirstWorklist.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);