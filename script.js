document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Theme Configuration Logic ---
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateToggleIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
        updateToggleIcon(newTheme);
    });

    function updateToggleIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'light') {
            icon.className = 'fa-solid fa-moon';
        } else {
            icon.className = 'fa-solid fa-sun';
        }
    }

    // --- 2. Inline Contact Form Actions ---
    const openFormBtn = document.getElementById('open-form-btn');
    const closeFormBtn = document.getElementById('close-form-btn');
    const formContainer = document.getElementById('inline-contact-form');
    const actionsGroup = document.getElementById('hero-actions-group');

    if (openFormBtn && formContainer && actionsGroup) {
        openFormBtn.addEventListener('click', () => {
            actionsGroup.style.display = 'none';
            formContainer.classList.add('active');
        });
    }

    if (closeFormBtn && formContainer && actionsGroup) {
        closeFormBtn.addEventListener('click', () => {
            formContainer.classList.remove('active');
            actionsGroup.style.display = 'flex';
        });
    }

    // --- 3. Lightbox Engine Preview & Close Actions ---
    const lightbox = document.getElementById('cert-lightbox');
    const lightboxImg = document.getElementById('lightbox-image');
    const closeLightboxBtn = document.getElementById('close-lightbox-btn');
    const certButtons = document.querySelectorAll('.cert-trigger-btn');

    // Open function
    certButtons.forEach(button => {
        button.addEventListener('click', () => {
            const certImagePath = button.getAttribute('data-cert');
            lightboxImg.src = certImagePath; // Inject correct file path
            lightbox.classList.add('active'); // Reveal overlay
            document.body.style.overflow = 'hidden'; // Lock background scrolling
        });
    });

    // Close function
    function closeLightbox() {
        lightbox.classList.remove('active');
        lightboxImg.src = ""; // Clear source
        document.body.style.overflow = ''; // Restore page scrolling
    }

    // 1st Method: Click the small 'X' button
    if (closeLightboxBtn) {
        closeLightboxBtn.addEventListener('click', closeLightbox);
    }

    // 2nd Method: Click outside the picture (on the dark blurred area)
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // 3rd Method: Press the 'Escape' key on the keyboard
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
});