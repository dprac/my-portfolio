function showContent(contentId, event) {
    // Prevent the default behavior of the anchor tag
    event.preventDefault();

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
