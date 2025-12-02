// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formContacto');
    const mensajeEstado = document.getElementById('mensajeEstado');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita el envío real del formulario

        // Tomar valores
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const tipo = document.getElementById('tipo').value;
        const mensaje = document.getElementById('mensaje').value.trim();

        // Validaciones simples
        if (nombre === '' || email === '' || tipo === '' || mensaje === '') {
            mensajeEstado.textContent = 'Por favor, completa todos los campos.';
            mensajeEstado.className = 'mensaje-estado error';
            return;
        }

        // Validación básica de formato de correo
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            mensajeEstado.textContent = 'Ingresa un correo electrónico válido.';
            mensajeEstado.className = 'mensaje-estado error';
            return;
        }

        // Si todo está bien, mostramos mensaje de éxito
        mensajeEstado.textContent = '¡Mensaje enviado correctamente! (simulación, sin servidor)';
        mensajeEstado.className = 'mensaje-estado ok';

        // Opcional: limpiar formulario
        form.reset();
    });
});
