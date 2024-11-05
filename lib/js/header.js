"use strict";

var headerText = "\n    <div class=\"dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle\" >\n        <button class=\"btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center\"\n                id=\"bd-theme\"\n                type=\"button\"\n                aria-expanded=\"false\"\n                data-bs-toggle=\"dropdown\"\n                aria-label=\"Toggle theme (auto)\">\n          <svg class=\"bi my-1 theme-icon-active\" width=\"1em\" height=\"1em\"><use href=\"#circle-half\"></use></svg>\n          <span class=\"visually-hidden\" id=\"bd-theme-text\">Toggle theme</span>\n        </button>\n        <ul class=\"dropdown-menu dropdown-menu-end shadow\" aria-labelledby=\"bd-theme-text\">\n          <li>\n            <button type=\"button\" class=\"dropdown-item d-flex align-items-center\" data-bs-theme-value=\"light\" aria-pressed=\"false\">\n              <svg class=\"bi me-2 opacity-50\" width=\"1em\" height=\"1em\"><use href=\"#sun-fill\"></use></svg>\n              Light\n              <svg class=\"bi ms-auto d-none\" width=\"1em\" height=\"1em\"><use href=\"#check2\"></use></svg>\n            </button>\n          </li>\n          <li>\n            <button type=\"button\" class=\"dropdown-item d-flex align-items-center\" data-bs-theme-value=\"dark\" aria-pressed=\"false\">\n              <svg class=\"bi me-2 opacity-50\" width=\"1em\" height=\"1em\"><use href=\"#moon-stars-fill\"></use></svg>\n              Dark\n              <svg class=\"bi ms-auto d-none\" width=\"1em\" height=\"1em\"><use href=\"#check2\"></use></svg>\n            </button>\n          </li>\n          <li>\n            <button type=\"button\" class=\"dropdown-item d-flex align-items-center active\" data-bs-theme-value=\"auto\" aria-pressed=\"true\">\n              <svg class=\"bi me-2 opacity-50\" width=\"1em\" height=\"1em\"><use href=\"#circle-half\"></use></svg>\n              Auto\n              <svg class=\"bi ms-auto d-none\" width=\"1em\" height=\"1em\"><use href=\"#check2\"></use></svg>\n            </button>\n          </li>\n        </ul>\n      </div>\n  \n<header data-bs-theme=\"auto\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark fixed-top bg-dark\">\n    <div class=\"container\">\n      <a class=\"navbar-brand nav-text d-flex align-items-center\" href=\"index.html\">\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"32\" fill=\"currentColor\" class=\"bi me-2\" viewBox=\"0 0 16 16\" role=\"img\" aria-label=\"Computer\">\n          <path d=\"M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z\"/>\n        </svg>\n        <span class=\"fs-4 nav-text\">Portfolio</span>\n      </a>\n      <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n        <ul class=\"navbar-nav me-auto mb-2 mb-lg-0 nav-text\">\n          <li class=\"nav-item nav-text\">\n            <a class=\"nav-link nav-text\" aria-current=\"page\" href=\"index.html\">\n              <i class=\"bi bi-house-door-fill me-1 nav-text\"></i>Home\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-text\" href=\"projects.html\">\n              <i class=\"bi bi-grid-3x3-gap-fill me-1\"></i>Overview\n            </a>\n          </li>\n          <li class=\"nav-item dropdown\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n              <i class=\"bi bi-folder2-open me-1\"></i>Projects\n            </a>\n            <ul class=\"dropdown-menu \" aria-labelledby=\"navbarDropdown\">\n              <li><a class=\"dropdown-item\" href=\"raytracing.html\">Raytracing Project</a></li>\n              <li><a class=\"dropdown-item\" href=\"OSDev.html\">OSDev Project</a></li>\n              <li><a class=\"dropdown-item\" href=\"raycaster.html\">Raycaster</a></li>\n              <li><a class=\"dropdown-item\" href=\"mod.html\">Java Mod</a></li>\n              <li><a class=\"dropdown-item\" href=\"https://biology-website-3j29thr7e-fsufshs-projects.vercel.app/\">Biology Website</a></li>\n              <li><a class=\"dropdown-item\" href=\"robotics.html\">Vex Robotics</a></li>\n            </ul>\n          </li>\n        </ul>\n        <form class=\"d-flex\" role=\"search\">\n          <div class=\"input-group\">\n            <input class=\"form-control\" type=\"search\" id=\"search-input\" placeholder=\"Search\" aria-label=\"Search\">\n \n          </div>\n        </form>\n\n      </div>\n    </div>\n  </nav>\n</header>";
var tempDiv = document.createElement('div');
tempDiv.innerHTML = headerText;
var navbarItems = tempDiv.querySelectorAll('.nav-item');
var currentPage = window.location.pathname;
navbarItems.forEach(function (item) {
  var link = item.querySelector('a.nav-link');
  var isActive = false;

  // Check if the main link is active
  if (link && link.href && link.href.includes(currentPage)) {
    isActive = true;
  } else if (item.querySelector('.dropdown-menu')) {
    var childLinks = item.querySelectorAll('.dropdown-menu a.dropdown-item');
    childLinks.forEach(function (childLink) {
      if (childLink.href && childLink.href.includes(currentPage)) {
        isActive = true;
      }
    });
  }

  // Add 'active' class if any link is active
  if (isActive) {
    item.classList.add('active');
  }
});
document.body.innerHTML += tempDiv.innerHTML;
document.addEventListener('DOMContentLoaded', function () {
  var searchInput = document.getElementById('search-input');
  var contentToSearch = document.querySelectorAll('.search-text');

  // Store original HTML content to preserve syntax highlighting
  var originalContent = Array.from(contentToSearch).map(function (container) {
    return container.innerHTML;
  });
  var clearHighlights = function clearHighlights() {
    contentToSearch.forEach(function (container, index) {
      container.innerHTML = originalContent[index];
    });
  };
  var highlightMatches = function highlightMatches(element, searchTerm) {
    var html = element.innerHTML;
    var searchRegex = new RegExp(searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    element.innerHTML = html.replace(searchRegex, function (match) {
      return "<mark class=\"search-highlight\">".concat(match, "</mark>");
    });
  };
  searchInput.addEventListener('input', function () {
    var searchTerm = this.value.trim();
    if (!searchTerm) {
      clearHighlights();
      return;
    }
    contentToSearch.forEach(function (container, index) {
      // Reset to original content first
      container.innerHTML = originalContent[index];
      // Then apply new highlights
      highlightMatches(container, searchTerm);
    });
  });

  // Optional: Clear highlights when the search box loses focus
  searchInput.addEventListener('blur', function () {
    if (!this.value.trim()) {
      clearHighlights();
    }
  });
});
var divElement = document.getElementById('search-container');

// Get all child elements of the div element
var childElements = divElement.children;

// Loop through each child element and add the 'search-text' class
for (var i = 0; i < childElements.length; i++) {
  childElements[i].classList.add('search-text');
}