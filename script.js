// Initialize AOS
AOS.init({ duration: 800, once: true });

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    sunIcon.classList.toggle('hidden');
    moonIcon.classList.toggle('hidden');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
});

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
}

// Contact Form Handling
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    formMessage.classList.remove('hidden');
    formMessage.classList.add('text-teal-500');
    formMessage.textContent = 'Thank you for your message! We’ll get back to you soon.';
    form.reset();
    setTimeout(() => {
        formMessage.classList.add('hidden');
    }, 3000);
});

// GSAP Animations for Hero Section
gsap.from('#home h2', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from('#home p', { opacity: 0, y: 50, duration: 1, delay: 0.7 });
gsap.from('#home a', { opacity: 0, y: 50, duration: 1, delay: 0.9 });