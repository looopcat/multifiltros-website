function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "block";
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "none";
  }
}

// Cerrar al hacer clic fuera del modal
window.onclick = function(event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};


const form = document.getElementById('cotizacion-form');
const mensaje = document.getElementById('form-mensaje');

form.addEventListener('submit', async function(e) {
  e.preventDefault();

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      mensaje.style.color = 'lightgreen';
      mensaje.textContent = "¡Tu cotización se envió correctamente!";
      form.reset();
    } else {
      const errorData = await response.json();
      mensaje.style.color = 'red';
      mensaje.textContent = errorData.errors
        ? errorData.errors.map(e => e.message).join(", ")
        : "Hubo un error al enviar el formulario";
    }
  } catch (error) {
    mensaje.style.color = 'red';
    mensaje.textContent = "Error de conexión al enviar el formulario.";
  }

  mensaje.style.display = 'block';
});

