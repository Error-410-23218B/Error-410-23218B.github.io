// Get the search input element
const searchInput = document.getElementById('search');

// Add an event listener to the search input
searchInput.addEventListener('input', (event) => {
event.preventDefault();

  // Get the search query
  const searchQuery = searchInput.value.trim().toLowerCase();

  // Get all the header elements on the page
  const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

  // Iterate through the header elements
  headers.forEach((header) => {
    // Get the header text
    const headerText = header.textContent.toLowerCase();

    // Check if the header text matches the search query
    if (headerText.includes(searchQuery)) {
      // Add a highlight class to the header element
      header.classList.add('highlight');
    } else {
      // Remove the highlight class from the header element
      header.classList.remove('highlight');
    }
  });
});