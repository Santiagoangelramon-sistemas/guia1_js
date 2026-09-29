// ==========================================
// Archivo: proyecto-final/app.js
// Descripción: Proyecto Integrador - App "Contador Dinámico"
// ==========================================

// 1. Declaración de estado (variable mutable)
let contador = 0;

// 2. Selección de elementos del DOM usando querySelector
const valorPantalla = document.querySelector('#valor');
const btnIncrementar = document.querySelector('#btn-incrementar');
const btnRestar = document.querySelector('#btn-restar');
const btnRestablecer = document.querySelector('#btn-restablecer');

// 3. Función para actualizar el color según el valor (Condicionales)
function actualizarColor() {
  if (contador > 0) {
    valorPantalla.style.color = "#16a34a"; // Verde para positivos
  } else if (contador < 0) {
    valorPantalla.style.color = "#dc2626"; // Rojo para negativos
  } else {
    valorPantalla.style.color = "#0f172a"; // Neutro para cero
  }
}

// 4. Escuchadores de eventos para la interacción (addEventListener)

// Incrementar (+)
btnIncrementar.addEventListener('click', () => {
  contador++;
  valorPantalla.textContent = contador;
  actualizarColor();
});

// Restar (-)
btnRestar.addEventListener('click', () => {
  contador--;
  valorPantalla.textContent = contador;
  actualizarColor();
});

// Restablecer (Reset a 0)
if (btnRestablecer) {
  btnRestablecer.addEventListener('click', () => {
    contador = 0;
    valorPantalla.textContent = contador;
    actualizarColor();
  });
}