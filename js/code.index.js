$(document).bind("mobileinit", function() {
	$.mobile.buttonMarkup.hoverDelay = true;
	$.mobile.touchOverflowEnabled = true;
	$.mobile.phonegapNavigationEnabled = true;
	$.mobile.pushStateEnabled = false;
	$.mobile.ajaxEnabled = false;
});
$(document).bind("pageinit", function() {
});
$(document).ready(function() {
	$("#buttonCreateAccount").bind("click", function(a) {
		a.stopImmediatePropagation();
		a.preventDefault();
		$.mobile.navigate("#createAccount", {});
	});
	document.addEventListener("deviceready", onDeviceReady, false);
});
function onDeviceReady() {
	var a = document.getElementById("deviceProperties");
	a.innerHTML = "Device Model: " + device.model + "<br/>Device Cordova: " + device.cordova + "<br />Device Platform: " + device.platform + "<br />Device UUID: " + device.uuid + "<br />Device Version: " + device.version + "<br />";
}
function loadPopup(g, i, b) {
	var f = $(g), d = f.jqmData("theme") || $.mobile.loader.prototype.options.theme, a = f.jqmData("msgtext") || $.mobile.loader.prototype.options.text, c = f.jqmData("textvisible") || $.mobile.loader.prototype.options.textVisible, h = !!f
			.jqmData("textonly");
	html = f.jqmData("html") || "";
	$.mobile.loading("show", {
		text : i,
		textVisible : true,
		theme : b,
		textonly : false,
		html : html
	});
};