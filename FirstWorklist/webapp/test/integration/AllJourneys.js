/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"zjblessons/FirstWorklist/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"zjblessons/FirstWorklist/test/integration/pages/Worklist",
	"zjblessons/FirstWorklist/test/integration/pages/Object",
	"zjblessons/FirstWorklist/test/integration/pages/NotFound",
	"zjblessons/FirstWorklist/test/integration/pages/Browser",
	"zjblessons/FirstWorklist/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zjblessons.FirstWorklist.view."
	});

	sap.ui.require([
		"zjblessons/FirstWorklist/test/integration/WorklistJourney",
		"zjblessons/FirstWorklist/test/integration/ObjectJourney",
		"zjblessons/FirstWorklist/test/integration/NavigationJourney",
		"zjblessons/FirstWorklist/test/integration/NotFoundJourney",
		"zjblessons/FirstWorklist/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});