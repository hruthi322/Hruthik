(function(){

    const toggleBtn = document.querySelector('.toggle');
 
    const accordion = document.querySelector('.accordion');

    function initiateAccordion() {

        accordion.addEventListener('click', function(e) {
    
            const buttonElement = e.target.closest('.accordion-trigger');
    
            if(buttonElement) {
                const buttonExpanded = buttonElement.getAttribute('aria-expanded');
                const controlsId = buttonElement.getAttribute('aria-controls');
                const contentElement = accordion.querySelector(`#${controlsId}`);
                const multiSelect = toggleBtn.getAttribute('aria-pressed');
                
                if(buttonExpanded === 'false') {
                    if(multiSelect === 'false') {
                        loopThroughButtonsAndContent();
                    }
                    buttonElement.setAttribute('aria-expanded', true);
                    contentElement.removeAttribute('hidden');
                }
                else {
                    buttonElement.setAttribute('aria-expanded', false);
                    contentElement.setAttribute('hidden', '');
                }
            }
        });
    }

    function initiateToggle() {
       
        toggleBtn.addEventListener('click', function() {
            const multiSelect = toggleBtn.getAttribute('aria-pressed');
            toggleBtn.setAttribute('aria-pressed', multiSelect === 'false');
            loopThroughButtonsAndContent();
        });
    }

    function loopThroughButtonsAndContent() {
        const buttonElements = accordion.querySelectorAll('.accordion-trigger');
        const contentElements = accordion.querySelectorAll('.accordion-panel');

        buttonElements.forEach(element => {
            element.setAttribute('aria-expanded', false);
        });
        contentElements.forEach(element => {
            element.setAttribute('hidden', '');
        });
    }

    initiateAccordion();
    initiateToggle();;
})()