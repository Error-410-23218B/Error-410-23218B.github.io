document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const content = document.getElementById('content');

  function highlightText(searchText) {
      if (searchText.trim() === '') {
          removeHighlights();
          return;
      }

      const regex = new RegExp(searchText, 'gi');
      const walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT, null);

      const nodesToHighlight = [];

      while (walker.nextNode()) {
          const node = walker.currentNode;
          if (node.nodeType === Node.TEXT_NODE && node.textContent.match(regex)) {
              nodesToHighlight.push(node);
          }
      }

      nodesToHighlight.forEach(node => {
          const parent = node.parentNode;
          const text = node.textContent;
          const parts = text.split(regex);
          const fragment = document.createDocumentFragment();

          parts.forEach((part, index) => {
              fragment.appendChild(document.createTextNode(part));
              if (index < parts.length - 1) {
                  const highlight = document.createElement('span');
                  highlight.className = 'highlight';
                  highlight.textContent = text.match(regex)[0];
                  fragment.appendChild(highlight);
              }
          });

          parent.replaceChild(fragment, node);
      });
  }

  function removeHighlights() {
      const highlights = content.querySelectorAll('.highlight');
      highlights.forEach(highlight => {
          const parent = highlight.parentNode;
          parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
          parent.normalize();
      });
  }

  function performSearch() {
      const searchText = searchInput.value;
      removeHighlights();
      highlightText(searchText);
  }

  searchButton.addEventListener('click', performSearch);
  searchInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
          performSearch();
      }
  });
});