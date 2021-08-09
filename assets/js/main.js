/*
 * Helper functions that can be loaded before DOM does
 */
// filter all dishes by class
// todo: hacky --- refactor
function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("dish");
	if (c == "all") c = "";
	for (i = 0; i < x.length; i++) {
		$(x[i]).hide();
		if (x[i].className.indexOf(c) > -1) {
			$(x[i]).show();
		};
	}
}

// hide section of the menu that are all hidden
function hideEmptySections() {
	// hide empty sections
	jQuery.each($("#menu").children(), function() {
		if ($("#" + $(this).closest("section").attr("id") + " .dish:not([style*='display: none'])").length) {
			$(this).closest('[id]').show();
		} else {
			$(this).closest('[id]').hide();
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
	$(".parallax").parallax("50%", 0.1, false, "100%");

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

		hideEmptySections();
	});

	// filter by category
	$('#filter-selection').click(function() {
		var filter = "";

		if ($("#vegetarian").prop("checked")) {
			filter += "vegetarian";
		}

		if ($("#spicy").prop("checked")) {
			filter += " spicy";
		}

		filterSelection(filter);
		hideEmptySections();
	});

});
