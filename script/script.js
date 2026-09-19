const themeToggleBtn = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            htmlElement.setAttribute('data-theme', 'light');
            themeToggleBtn.innerHTML = '☀️';
        } else {
            htmlElement.setAttribute('data-theme', 'dark');
            themeToggleBtn.innerHTML = '🌙';
        }
    });
}

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = contactForm.querySelector('input[type="text"]');
        const emailInput = contactForm.querySelector('input[type="email"]');
        const messageInput = contactForm.querySelector('textarea');
        const btn = contactForm.querySelector('.submit-btn');

        const nameGroup = nameInput.closest('.form-group');
        const emailGroup = emailInput.closest('.form-group');
        const messageGroup = messageInput.closest('.form-group');

        let isValid = true;

        [nameGroup, emailGroup, messageGroup].forEach(group => {
            group.classList.remove('error');
        });

        if (nameInput.value.trim() === '') {
            nameGroup.classList.add('error');
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailGroup.classList.add('error');
            isValid = false;
        }

        if (messageInput.value.trim() === '') {
            messageGroup.classList.add('error');
            isValid = false;
        }

        if (!isValid) return;

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