// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = [
        { href: '#about', text: 'About' },
        { href: '#skills', text: 'Skills' },
        { href: '#projects', text: 'Projects' },
        { href: '#contact', text: 'Contact' }
    ];

    // Populate mobile menu
    navLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        a.className = 'text-gray-300 hover:text-cyan-400 font-medium py-2 transition';
        a.addEventListener('click', () => {
            mobileMenu.classList.remove('menu-open'); // Close menu on click
        });
        mobileMenu.appendChild(a);
    });

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('menu-open');
    });


    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
            navbar.classList.replace('bg-dark-900/70', 'bg-dark-900/95');
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.classList.replace('bg-dark-900/95', 'bg-dark-900/70');
        }
    });


    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    };

    const revealOptions = {
        threshold: 0.15, // 15% of element must be visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });


    // --- Smooth Scrolling for Anchor Links (fallback/override setup) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

});
