/* ================================================================
   Cafe Royale - Complete JavaScript
   ================================================================ */

(function() {
    'use strict';

    // ===== PRELOADER =====
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('loaded');
        }, 800);
    });

    // ===== HEADER SCROLL =====
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // ===== MOBILE NAV =====
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.navmenu ul');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            mobileToggle.classList.toggle('bi-list');
            mobileToggle.classList.toggle('bi-x');
        });
    }

    document.querySelectorAll('.navmenu ul li a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            if (mobileToggle) {
                mobileToggle.classList.remove('bi-x');
                mobileToggle.classList.add('bi-list');
            }
        });
    });

    // ===== SCROLL TOP =====
    const scrollTop = document.getElementById('scrollTop');
    if (scrollTop) {
        window.addEventListener('scroll', () => {
            scrollTop.classList.toggle('active', window.scrollY > 300);
        });

        scrollTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = 80;
                window.scrollTo({
                    top: target.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== MENU FILTER =====
    const filterItems = document.querySelectorAll('.menu-filters ul li');
    const menuItems = document.querySelectorAll('.menu-container .col-lg-6');

    filterItems.forEach(filter => {
        filter.addEventListener('click', function() {
            filterItems.forEach(f => f.classList.remove('filter-active'));
            this.classList.add('filter-active');

            const filterValue = this.getAttribute('data-filter');

            menuItems.forEach(item => {
                if (filterValue === '*' || item.classList.contains(filterValue.replace('.', ''))) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // ===== HERO SWIPER =====
    if (typeof Swiper !== 'undefined') {
        const heroSwiper = new Swiper('.hero-swiper', {
            loop: true,
            speed: 800,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            effect: 'fade',
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
    }

    // ===== ACTIVE NAV LINK =====
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navmenu ul li a:not(.dropdown-toggle)');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // ===== CONSOLE WELCOME =====
    console.log('%c☕ Cafe Royale', 'font-size: 20px; font-weight: bold; color: #d4a373;');
    console.log('%cWelcome to our cozy corner in Karachi!', 'font-size: 14px; color: #888;');
    console.log('%c📍 House No. 45, Block 5, Clifton, Karachi', 'font-size: 12px; color: #aaa;');

    // ===== CSS Animation Keyframes =====
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(styleSheet);

})();