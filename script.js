function showContent(sectionId) {
  // Hide all content sections
  var sections = document.querySelectorAll('.content-section');
  sections.forEach(function(section) {
    section.classList.remove('active');
  });
  
  // Show the selected content section
  var selectedSection = document.getElementById(sectionId);
  selectedSection.classList.add('active');
}
</script>

    // Show the selected content section
    var selectedContent = document.getElementById(contentId);
    selectedContent.style.display = 'block';
}
}
