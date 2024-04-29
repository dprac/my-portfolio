document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners to sidebar links
    document.getElementById("aboutLink").addEventListener("click", function(event) {
        showContent('about');
        event.preventDefault(); // Prevent default link behavior
    });

    document.getElementById("project1Link").addEventListener("click", function(event) {
        showContent('project1');
        event.preventDefault(); // Prevent default link behavior
    });

    document.getElementById("project2Link").addEventListener("click", function(event) {
        showContent('project2');
        event.preventDefault(); // Prevent default link behavior
    });

    document.getElementById("project3Link").addEventListener("click", function(event) {
        showContent('project3');
        event.preventDefault(); // Prevent default link behavior
    });
});

function showContent(contentId) {
    // Hide all content sections
    var contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected content section
    var selectedContent = document.getElementById(contentId);
    selectedContent.style.display = 'block';

    // Update the main content with the selected content
    var mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = selectedContent.innerHTML;
}

