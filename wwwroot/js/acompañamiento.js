document.addEventListener('DOMContentLoaded', function () {
    const tabTriggers = document.querySelectorAll('.tab-trigger');
    const tabContents = document.querySelectorAll('.tab-content');

    const hash = window.location.hash.replace('#', '');
    if (hash) {
        switchTab(hash);
    }

    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);

            history.replaceState(null, null, '#' + tabId);
        });
    });

    function switchTab(tabId) {
        tabTriggers.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        const selectedTrigger = document.querySelector(`[data-tab="${tabId}"]`);
        const selectedContent = document.getElementById(`tab-${tabId}`);

        if (selectedTrigger && selectedContent) {
            selectedTrigger.classList.add('active');
            selectedContent.classList.add('active');
        }
    }

    window.addEventListener('hashchange', function () {
        const hash = window.location.hash.replace('#', '') || 'ec';
        switchTab(hash);
    });
});