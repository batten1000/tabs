$(document).ready(function() {

// Autocomplete + direct forwarding
$(function() {
	$('#sr').autocomplete({
	appendTo: "#siteSearch", //lib mod, changed this from header form to form ID
	minLength: 0,
	source: [
		{label: 'Sustainable Table, food', value: 'popup_searchresults.php&iframe=true'},
		{label: 'Eat Well Guide, food', value: 'popup_searchresults.php&iframe=true'},
		{label: 'The Meatrix, food', value: 'popup_searchresults.php&iframe=true'},
		{label: 'H2O conserve, water', value: 'popup_searchresults.php&iframe=true'},
		{label: 'Network for New Energy Choices, energy', value: 'popup_searchresults.php&iframe=true'}
	],
	select: function (event, ui) {
		$(event.target).val(ui.item.label);
		window.location = ui.item.value;
		return false;
	}
	});
});

// Show all autocomplete entries on click
$('#sr').click(function() {
	$(this).autocomplete( "search", "" );
});

// Placeholder detection
if (!Modernizr.input.placeholder) {
	$('#sr').val("Search");

	$('#sr').focus(function() {
		if ($(this).val() == "Search") $(this).val("");
	});

	$('#sr').blur(function() {
		if ($(this).val() == "") $(this).val("Search");
	});
}

});