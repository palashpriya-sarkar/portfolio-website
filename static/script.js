// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'linear-gradient(135deg, rgb(39, 39, 39) 0%, rgb(130, 133, 131) 50%, rgb(255, 255, 255) 100%);';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.12)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, rgb(22, 24, 25) 0%, rgb(130, 133, 131) 50%, rgb(255, 255, 255) 100%);';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
    }
});


// Chatbot functionality
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotPopup = document.getElementById('chatbotPopup');
const chatbotClose = document.getElementById('chatbotClose');

chatbotToggle.addEventListener('click', () => {
    chatbotPopup.classList.toggle('active');
});

chatbotClose.addEventListener('click', () => {
    chatbotPopup.classList.remove('active');
});

// Close chatbot when clicking outside
document.addEventListener('click', (e) => {
    if (!chatbotToggle.contains(e.target) && !chatbotPopup.contains(e.target)) {
        chatbotPopup.classList.remove('active');
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe framework cards, project cards, and list items
document.querySelectorAll('.framework-card, .project-card, .learning-list li, .research-list li').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
