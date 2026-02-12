// ============================================
// HEADER JAVASCRIPT
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
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

    // Close mobile menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link:not(.mobile-nav-toggle), .mobile-nav-sublink');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function () {
            setTimeout(closeMobileMenu, 100);
        });
    });

    // Mobile Submenu Toggles
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

    // ===== NUEVO: Desktop Dropdown Toggle =====
    const dropdownTriggers = document.querySelectorAll('.nav-dropdown-trigger');

    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation(); // Evita que se propague el click

            const dropdown = this.closest('.nav-dropdown');
            const menu = dropdown.querySelector('.nav-dropdown-menu');
            const isOpen = menu.style.opacity === '1';

            // Cerrar todos los otros dropdowns
            document.querySelectorAll('.nav-dropdown-menu').forEach(otherMenu => {
                if (otherMenu !== menu) {
                    otherMenu.style.opacity = '0';
                    otherMenu.style.visibility = 'hidden';
                }
            });

            // Toggle el dropdown actual
            if (isOpen) {
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
            } else {
                menu.style.opacity = '1';
                menu.style.visibility = 'visible';
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function (e) {
        // Cierra si el click NO es dentro de un dropdown Y NO es dentro del header
        if (!e.target.closest('.nav-dropdown') && !e.target.closest('.header-main')) {
            document.querySelectorAll('.nav-dropdown-menu').forEach(menu => {
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
            });
        }
    });

    // Highlight active page
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href !== '#' && currentPath.includes(href)) {
            link.classList.add('active');
        }
    });

    // ESC key to close mobile menu and dropdowns
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