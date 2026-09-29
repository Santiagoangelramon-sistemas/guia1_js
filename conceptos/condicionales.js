// ==========================================
// Archivo: conceptos/condicionales.js
// Descripción: Estructuras de Control y Toma de Decisiones en JS Vainilla
// ==========================================

// 1. Definición de variable para evaluación
const edadUsuario = 15;

console.log("=== EVALUACIÓN DE CATEGORÍA DE EDAD ===");
console.log("Edad ingresada: " + edadUsuario + " años.");

// 2. Estructura Condicional (if - else if - else)
if (edadUsuario >= 18) {
  // Se ejecuta si edadUsuario es mayor o igual a 18
  console.log("¡Puedes registrarte en el torneo de mayores!");
} else if (edadUsuario >= 13) {
  // Se ejecuta si edadUsuario es mayor o igual a 13 pero menor a 18
  console.log("¡Bienvenido a la categoría Juvenil!");
} else {
  // Se ejecuta en cualquier otro caso (menor de 13 años)
  console.log("Lo siento, necesitas ser mayor de 13 años.");
}

// 3. Ejemplo adicional con operadores de comparación y lógicos (OR)
const tienePaseEspecial = true;

console.log("\n=== EVALUACIÓN DE ACCESO ESPECIAL ===");
if (edadUsuario >= 18 || tienePaseEspecial) {
  console.log("Acceso concedido al área VIP.");
} else {
  console.log("Acceso denegado al área VIP.");
}