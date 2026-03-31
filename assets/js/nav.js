// Fortude Repository - Navigation Module
// This file handles navigation highlighting based on current page

document.addEventListener('DOMContentLoaded', function() {
    // Get the current page path
    const currentPage = window.location.pathname;
    
    // Update active navigation link
    updateActiveNav(currentPage);
});

function updateActiveNav(currentPath) {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        // Get the href attribute
        const href = link.getAttribute('href');
        
        // Check if current path matches the link href
        if (currentPath.includes(href) || 
            (currentPath.endsWith('/') && href.endsWith('index.html'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Export for use in other modules
window.FortuderepoNav = {
    updateActiveNav: updateActiveNav
};
