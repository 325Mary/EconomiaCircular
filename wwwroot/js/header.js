


document.addEventListener('DOMContentLoaded', function () {
    
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuClose = document.getElementById('mobile-menu-close');

    function openMobileMenu() {
        mobileMenu.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        document.body.classList.add('mobile-menu-open');
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.classList.remove('mobile-menu-open');
    }

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', openMobileMenu);
    }

    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    }

    
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link:not(.mobile-nav-toggle), .mobile-nav-sublink');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function () {
            setTimeout(closeMobileMenu, 100);
        });
    });

    
    const mobileNavToggles = document.querySelectorAll('.mobile-nav-toggle');
    mobileNavToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            const section = this.closest('.mobile-nav-section');

            document.querySelectorAll('.mobile-nav-section').forEach(otherSection => {
                if (otherSection !== section) {
                    otherSection.classList.remove('active');
                }
            });

            section.classList.toggle('active');
        });
    });

    
    const dropdownTriggers = document.querySelectorAll('.nav-dropdown-trigger');

    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation(); 

            const dropdown = this.closest('.nav-dropdown');
            const menu = dropdown.querySelector('.nav-dropdown-menu');
            const isOpen = menu.style.opacity === '1';

            
            document.querySelectorAll('.nav-dropdown-menu').forEach(otherMenu => {
                if (otherMenu !== menu) {
                    otherMenu.style.opacity = '0';
                    otherMenu.style.visibility = 'hidden';
                }
            });

            
            if (isOpen) {
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
            } else {
                menu.style.opacity = '1';
                menu.style.visibility = 'visible';
            }
        });
    });

    
    document.addEventListener('click', function (e) {
        
        if (!e.target.closest('.nav-dropdown') && !e.target.closest('.header-main')) {
            document.querySelectorAll('.nav-dropdown-menu').forEach(menu => {
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
            });
        }
    });

    
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href !== '#' && currentPath.includes(href)) {
            link.classList.add('active');
        }
    });

    
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeMobileMenu();
            document.querySelectorAll('.nav-dropdown-menu').forEach(menu => {
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
            });
        }
    });
});