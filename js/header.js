


const headerText = `
    <div class="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle" >
        <button class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
                id="bd-theme"
                type="button"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                aria-label="Toggle theme (auto)">
          <svg class="bi my-1 theme-icon-active" width="1em" height="1em"><use href="#circle-half"></use></svg>
          <span class="visually-hidden" id="bd-theme-text">Toggle theme</span>
        </button>
        <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
          <li>
            <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
              <svg class="bi me-2 opacity-50" width="1em" height="1em"><use href="#sun-fill"></use></svg>
              Light
              <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
            </button>
          </li>
          <li>
            <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
              <svg class="bi me-2 opacity-50" width="1em" height="1em"><use href="#moon-stars-fill"></use></svg>
              Dark
              <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
            </button>
          </li>
          <li>
            <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
              <svg class="bi me-2 opacity-50" width="1em" height="1em"><use href="#circle-half"></use></svg>
              Auto
              <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
            </button>
          </li>
        </ul>
      </div>
  
<header data-bs-theme="auto">
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="index.html">
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="currentColor" class="bi me-2" viewBox="0 0 16 16" role="img" aria-label="Computer">
          <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
        </svg>
        <span class="fs-4">Portfolio</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="index.html">
              <i class="bi bi-house-door-fill me-1"></i>Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="projects.html">
              <i class="bi bi-grid-3x3-gap-fill me-1"></i>Overview
            </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-folder2-open me-1"></i>Projects
            </a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="raytracing.html">Raytracing Project</a></li>
              <li><a class="dropdown-item" href="OSDev.html">OSDev Project</a></li>
              <li><a class="dropdown-item" href="raycaster.html">Raycaster</a></li>
              <li><a class="dropdown-item" href="#">Java Mod</a></li>
              <li><a class="dropdown-item" href="https://biology-website-3j29thr7e-fsufshs-projects.vercel.app/">Biology Website</a></li>
              <li><a class="dropdown-item" href="robotics.html">Vex Robotics</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <div class="input-group">
            <input class="form-control" type="search" id="search-input" placeholder="Search" aria-label="Search">
 
          </div>
        </form>

      </div>
    </div>
  </nav>
</header>`


      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = headerText;
      const navbarItems = tempDiv.querySelectorAll('.nav-item');
      const currentPage = window.location.pathname;
    
      navbarItems.forEach((item) => {
        const link = item.querySelector('a.nav-link');
        let isActive = false;
      
        // Check if the main link is active
        if (link && link.href && link.href.includes(currentPage)) {
          isActive = true;
        } else if (item.querySelector('.dropdown-menu')) {
          const childLinks = item.querySelectorAll('.dropdown-menu a.dropdown-item');
          childLinks.forEach((childLink) => {
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

      document.addEventListener('DOMContentLoaded', () => {
        const searchInput = document.getElementById('search-input');
        const contentToSearch = document.querySelectorAll('.search-text'); // Adjust the selector based on your content
    
        // Store original HTML content to reset when necessary
        const originalContent = Array.from(contentToSearch).map(container => container.innerHTML);
    
        const clearHighlights = () => {
            contentToSearch.forEach((container, index) => {
                // Reset to original content
                container.innerHTML = originalContent[index];
            });
        };
    
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
    
            // Clear highlights if the search box is empty
            if (!searchTerm) {
                clearHighlights();
                return; // Exit the function if the input is empty
            }
    
            // Clear previous highlights
            clearHighlights();
    
            contentToSearch.forEach((container, index) => {
                // Create a temporary element to extract text
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = originalContent[index]; // Set the original HTML content
    
                // Get the plain text content
                const textContent = tempDiv.textContent || tempDiv.innerText || "";
    
                // Create a regex for the search term
                const regex = new RegExp(`(${searchTerm})`, 'gi');
    
                // Highlight matches in the original HTML
                container.innerHTML = originalContent[index].replace(regex, '<mark>$1</mark>');
            });
        });
    
        // Clear highlights when the search box loses focus
        searchInput.addEventListener('blur', function() {
            clearHighlights();
        });
    });