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
        
        const nameInput = contactForm.querySelector('#fullName') || contactForm.querySelector('input[type="text"]');
        const emailInput = contactForm.querySelector('input[type="email"]');
        const subjectInput = contactForm.querySelector('#subject');
        const messageInput = contactForm.querySelector('textarea');
        const btn = contactForm.querySelector('.submit-btn');

        const nameGroup = nameInput ? nameInput.closest('.form-group') : null;
        const emailGroup = emailInput ? emailInput.closest('.form-group') : null;
        const subjectGroup = subjectInput ? subjectInput.closest('.form-group') : null;
        const messageGroup = messageInput ? messageInput.closest('.form-group') : null;

        let isValid = true;

        [nameGroup, emailGroup, subjectGroup, messageGroup].forEach(group => {
            if (group) group.classList.remove('error');
        });

        const nameVal = nameInput.value.trim();
        const nameErrorSpan = nameGroup.querySelector('.error-msg');
        const nameRegex = /^[A-Za-z\s]+$/;

        if (nameVal === '') {
            nameErrorSpan.textContent = 'Please enter your full name.';
            nameGroup.classList.add('error');
            isValid = false;
        } else if (!nameRegex.test(nameVal)) {
            nameErrorSpan.textContent = 'Full name should only contain letters and spaces (no numbers or special characters).';
            nameGroup.classList.add('error');
            isValid = false;
        } else if (nameVal.length < 3) {
            nameErrorSpan.textContent = 'Full name must be at least 3 characters long.';
            nameGroup.classList.add('error');
            isValid = false;
        }

        const emailVal = emailInput.value.trim();
        const emailErrorSpan = emailGroup.querySelector('.error-msg');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailVal === '') {
            emailErrorSpan.textContent = 'Please enter your email address.';
            emailGroup.classList.add('error');
            isValid = false;
        } else if (!emailVal.includes('@')) {
            emailErrorSpan.textContent = "Please include an '@' in the email address. '" + emailVal + "' is missing an '@'.";
            emailGroup.classList.add('error');
            isValid = false;
        } else if (!emailVal.includes('.')) {
            emailErrorSpan.textContent = "Please include a domain extension (like .com) in the email address.";
            emailGroup.classList.add('error');
            isValid = false;
        } else if (!emailRegex.test(emailVal)) {
            emailErrorSpan.textContent = 'Please enter a valid email address format.';
            emailGroup.classList.add('error');
            isValid = false;
        }   

        if (subjectInput) {
            const subjectVal = subjectInput.value.trim();
            const subjectErrorSpan = subjectGroup.querySelector('.error-msg');
            if (subjectVal === '') {
                subjectErrorSpan.textContent = 'Please enter a subject.';
                subjectGroup.classList.add('error');
                isValid = false;
            } else if (subjectVal.length < 4) {
                subjectErrorSpan.textContent = 'Subject must be at least 4 characters long.';
                subjectGroup.classList.add('error');
                isValid = false;
            }
        }

        const messageVal = messageInput.value.trim();
        const messageErrorSpan = messageGroup.querySelector('.error-msg');
        if (messageVal === '') {
            messageErrorSpan.textContent = 'Please enter your message.';
            messageGroup.classList.add('error');
            isValid = false;
        } else if (messageVal.length < 10) {
            messageErrorSpan.textContent = 'Message must be at least 10 characters long.';
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