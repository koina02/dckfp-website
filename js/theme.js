// theme.js
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('darkModeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
    } else {
        body.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
    }
    
    // Update icon based on current theme
    function updateIcon() {
        const currentTheme = body.getAttribute('data-theme');
        themeIcon.className = currentTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    }
    
    // Initialize icon
    updateIcon();
    
    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon();
    });
    
    // Watch for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            body.setAttribute('data-theme', e.matches ? 'dark' : 'light');
            updateIcon();
        }
    });
});