// Hamburger-menu: elementen ophalen voor het mobiele navigatiemenu.
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Menu openen/sluiten bij klikken op de hamburger-knop.
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Menu automatisch sluiten zodra er op een navigatielink wordt geklikt.
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Projectvensters: koppel elke "Lees meer"-knop aan het juiste dialoogvenster.
document.querySelectorAll('[data-project-dialog]').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const dialog = document.getElementById(trigger.dataset.projectDialog);

        if (dialog) {
            dialog.showModal();
        }
    });
});

// Sluitknop en klik buiten het venster: dialoogvenster sluiten.
document.querySelectorAll('.project-dialog').forEach(dialog => {
    dialog.querySelector('.project-dialog-close').addEventListener('click', () => {
        dialog.close();
    });

    dialog.addEventListener('click', (e) => {
        if (e.target === dialog) {
            dialog.close();
        }
    });
});

// Contactformulier: invoer ophalen en een bevestiging tonen.
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Bedankt ${name}! Je bericht is verstuurd.`);
    contactForm.reset();
});

// Scroll-animaties: secties fade-in laten verschijnen zodra ze in beeld komen.
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Elke sectie onzichtbaar starten en observeren voor de animatie.
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});
