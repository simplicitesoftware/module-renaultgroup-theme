/* Specific client script */
/**/
(function($) {
	$(document).on("ui.loaded", function() {
		// customize UI here before home page	
		$("body").data("theme", "light");
		$("body").data("brand", "rg");
	});

	// $(document).on("ui.ready", function() {
	// 	// customize UI here	
	// });
	
	// $(document).on("ui.beforeunload", function() {
	// 	// window will be unloaded
	// });
	
	// $(document).on("ui.unload", function() {
	// 	// window is unloaded
	// });
})(jQuery);
/**/