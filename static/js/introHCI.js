'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$('#testjs').text("Ask your own heart.");
		$('.jumbotron p').toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);

	$("#submitBtn").click(function(e) {
		var modProj = $('#project').val();
		var newWidth = $('#width').val();
		var newDescrip = $('#description').val();

		$(modProj).animate({
			width: newWidth
		});

		$(modProj + " .project-description").text(newDescrip);
	})
}

function projectClick(e) {
	// console.log("Project clicked");
	// prevent the page from reloading
	e.preventDefault();
  // in an event handler, $(this) refers to
	// the object that triggered the event
	// $(this).css("background-color", "#7fff00");
	var projectTitle = $(this).find("p").text();
	var jumbotronHeader = $(".jumbotron h1");
	jumbotronHeader.text(projectTitle);

	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
	var image = $(containingProject).find("a .img");

	if(description.length == 0) {
		$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
	} else {
		description.fadeToggle();
		image.fadeToggle();
	}


}
