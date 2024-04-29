function showContent(contentId) {
    // Hide all content sections
    var contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected content section
    var selectedContent = document.getElementById(contentId);
    selectedContent.style.display = 'block';
}
