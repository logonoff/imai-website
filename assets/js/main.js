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
$("#search").on("keyup", function() {
	var value = $(this).val().toLowerCase();
	$("#menu .name").filter(function() {
		$(this).closest(".dish").toggle($(this).text().toLowerCase().indexOf(value) > -1);
	}); 
});
