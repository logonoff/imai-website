/* function to add a self link for stuff with an id */
$.fn.addSelfLink = function() {
	return this.each(function() {
		$(this).append(" " +
			"<a class='self-link instapaper_hide instapaper_ignore' href='#" + $(this).closest("[id]").attr("id") +
			"' aria-hidden='true' tabindex='-1' title='Permalink to this section'>#</a>"
		);
	});
};

// Apply self link to h2 and h2 w. js-self-link class
$(".js-self-link h2, .js-self-link h3").addSelfLink();

// filter menu items
$("#search-menu").on("keyup", function() {
	var value = $(this).val().toLowerCase();
	$("#menu .dish").filter(function() {
		$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
	}); 

	// hide empty sections
	jQuery.each($("#menu").children(), function() {
		if ($("#" + $(this).closest('[id]').attr('id') + " .dish:not([style*='display: none'])").length) {
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

});
