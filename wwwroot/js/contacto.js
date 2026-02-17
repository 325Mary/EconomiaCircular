



document.addEventListener('DOMContentLoaded', function () {

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            
            if (!validateForm()) {
                return;
            }

            
            const formData = {
                nombre: document.getElementById('nombre').value,
                correo: document.getElementById('correo').value,
                telefono: document.getElementById('telefono').value,
                asunto: document.getElementById('asunto').value,
                mensaje: document.getElementById('mensaje').value,
                acepto: document.getElementById('acepto').checked
            };

            
            console.log('Datos del formulario:', formData);

            
            alert('Mensaje enviado correctamente. Te contactaremos pronto.');

            
            contactForm.reset();

            
            
        });
    }

    function validateForm() {
        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const asunto = document.getElementById('asunto').value;
        const mensaje = document.getElementById('mensaje').value.trim();
        const acepto = document.getElementById('acepto').checked;

        if (!nombre) {
            alert('Por favor ingresa tu nombre completo');
            document.getElementById('nombre').focus();
            return false;
        }

        if (!correo || !isValidEmail(correo)) {
            alert('Por favor ingresa un correo electrónico válido');
            document.getElementById('correo').focus();
            return false;
        }

        if (!asunto) {
            alert('Por favor selecciona un asunto');
            document.getElementById('asunto').focus();
            return false;
        }

        if (!mensaje) {
            alert('Por favor escribe tu mensaje');
            document.getElementById('mensaje').focus();
            return false;
        }

        if (!acepto) {
            alert('Debes aceptar la Política de Tratamiento de Datos Personales');
            return false;
        }

        return true;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    
    const downloadButtons = document.querySelectorAll('.btn-download');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function () {
            const documentName = this.textContent.trim();
            console.log('Descargando:', documentName);
            alert('Descarga de: ' + documentName + '\n\nImplementar lógica de descarga en el backend.');
        });
    });

    
    const mensajeTextarea = document.getElementById('mensaje');
    if (mensajeTextarea) {
        mensajeTextarea.addEventListener('input', function () {
            const currentLength = this.value.length;
            const maxLength = 1000; 

            if (currentLength > maxLength) {
                this.value = this.value.substring(0, maxLength);
            }
        });
    }

});