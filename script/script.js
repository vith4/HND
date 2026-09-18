const themeToggleBtn = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'light');
        themeToggleBtn.innerHTML = '🌙';
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.innerHTML = '☀️';
    }
});