



document.addEventListener('DOMContentLoaded', function () {

    
    const tabTriggers = document.querySelectorAll('.normativa-tab-trigger');
    const tabContents = document.querySelectorAll('.normativa-tab-content');

    
    function switchTab(tabId) {
        
        tabTriggers.forEach(trigger => {
            trigger.classList.remove('active');
        });

        
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        
        const activeTrigger = document.querySelector(`[data-tab="${tabId}"]`);
        if (activeTrigger) {
            activeTrigger.classList.add('active');
        }

        
        const activeContent = document.getElementById(`tab-${tabId}`);
        if (activeContent) {
            activeContent.classList.add('active');
        }

        
        if (history.pushState) {
            history.pushState(null, null, `#${tabId}`);
        } else {
            window.location.hash = tabId;
        }
    }

    
    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(`tab-${hash}`)) {
        switchTab(hash);
    }

    
    window.addEventListener('hashchange', function () {
        const newHash = window.location.hash.substring(1);
        if (newHash && document.getElementById(`tab-${newHash}`)) {
            switchTab(newHash);
        }
    });

    
    const downloadButtons = document.querySelectorAll('.norma-card .btn');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function () {
            const normaTitle = this.closest('.norma-card').querySelector('.norma-title').textContent;
            console.log('Descargando:', normaTitle);
            
            alert('Descarga de: ' + normaTitle + '\n\nImplementar lógica de descarga en el backend.');
        });
    });

});