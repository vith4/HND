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

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const nameInput = contactForm.querySelector('input[type="text"]');
        const emailInput = contactForm.querySelector('input[type="email"]');
        const messageInput = contactForm.querySelector('textarea');
        const btn = contactForm.querySelector('.submit-btn');

        if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
            alert('Please fill out all fields before sending.');
            return;
        }

        if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
            alert('Please enter a valid email address.');
            return;
        }

        const originalText = btn.textContent;
        
        btn.textContent = 'Message Sent';
        btn.style.background = '#2a4a2a';
        btn.style.color = '#5aaa5a';
        btn.style.borderColor = '#5aaa5a';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.style.color = '';
            btn.style.borderColor = '';
            contactForm.reset();
        }, 3000);
    });
}