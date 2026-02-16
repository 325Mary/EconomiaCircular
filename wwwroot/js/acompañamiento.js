// Tab functionality
document.addEventListener('DOMContentLoaded', function () {
    const tabTriggers = document.querySelectorAll('.tab-trigger');
    const tabContents = document.querySelectorAll('.tab-content');

    // Handle hash on page load
    const hash = window.location.hash.replace('#', '');
    if (hash) {
        switchTab(hash);
    }

    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);

            // Update URL hash
            history.replaceState(null, null, '#' + tabId);
        });
    });

    function switchTab(tabId) {
        // Remove active class from all triggers and contents
        tabTriggers.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        // Add active class to selected trigger and content
        const selectedTrigger = document.querySelector(`[data-tab="${tabId}"]`);
        const selectedContent = document.getElementById(`tab-${tabId}`);

        if (selectedTrigger && selectedContent) {
            selectedTrigger.classList.add('active');
            selectedContent.classList.add('active');
        }
    }

    // Handle browser back/forward
    window.addEventListener('hashchange', function () {
        const hash = window.location.hash.replace('#', '') || 'ec';
        switchTab(hash);
    });
});