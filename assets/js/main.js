/*
 * Helper functions that can be loaded before DOM does
 */

/* filter all dishes by class
 * assumes dishes have class .dish, and
 * classes in elements .dish are in order of argument c */
function filterSelection(c) {
	if (c == "all") c = "";

	$(".dish").each(function() {
		if ($(this).attr("class").includes(c)) {
			$(this).show();
		} else {
			$(this).hide();
		};
	});
}

// hide section of the menu that are all hidden
function hideEmptyCategories() {
	// hide empty categories
	jQuery.each($("#menu").children(), function() {
		if ($("#" + $(this).closest("section").attr("id") + " .dish:not([style*='display: none'])").length) {
			$(this).closest("[id]").show();
		} else {
			$(this).closest("[id]").hide();
		}
	});

	// if nothing was returned, show a friendly message
	if ($("#menu").innerHeight() === 0) {
		$("#empty-msg").show();
	} else {
		$("#empty-msg").hide();
	}
}

// Handler for .ready() called.
$(document).ready(function() {
	/* initalize quicklink */
	quicklink.listen();

	/* parallax */
	$(".parallax").each(function() {
		$(this).parallax("50%", 0.1, false, $(this).data("parallax-offset"));
	});

	/*
	 * Menu
	 */
	// only show search when js is loaded
	$("#menu-filters").show();

	// filter by search
	$("#search-menu").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		$("#menu .dish").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
		});

		hideEmptyCategories();
	});

	// filter by category
	$("#filter-selection").click(function() {
		var filter = "";

		if ($("#vegetarian").prop("checked")) {
			filter += "vegetarian";
		}

		if ($("#spicy").prop("checked")) {
			filter += " spicy";
		}

		filterSelection(filter);
		hideEmptyCategories();
	});

});
