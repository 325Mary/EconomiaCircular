// ============================================
// SECTORES TABS JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    // Get all tab triggers
    const tabTriggers = document.querySelectorAll('.tab-trigger');
    const tabContents = document.querySelectorAll('.tab-content');

    // Function to switch tabs
    function switchTab(tabId) {
        // Remove active class from all triggers
        tabTriggers.forEach(trigger => {
            trigger.classList.remove('active');
        });

        // Hide all tab contents
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        // Add active class to clicked trigger
        const activeTrigger = document.querySelector(`[data-tab="${tabId}"]`);
        if (activeTrigger) {
            activeTrigger.classList.add('active');
        }

        // Show corresponding tab content
        const activeContent = document.getElementById(`tab-${tabId}`);
        if (activeContent) {
            activeContent.classList.add('active');
        }

        // Update URL hash without scrolling
        if (history.pushState) {
            history.pushState(null, null, `#${tabId}`);
        } else {
            window.location.hash = tabId;
        }
    }

    // Add click event to all tab triggers
    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Check URL hash on page load
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(`tab-${hash}`)) {
        switchTab(hash);
    }

    // Listen for hash changes (browser back/forward)
    window.addEventListener('hashchange', function () {
        const newHash = window.location.hash.substring(1);
        if (newHash && document.getElementById(`tab-${newHash}`)) {
            switchTab(newHash);
        }
    });

});