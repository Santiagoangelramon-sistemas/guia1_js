// ==========================================
// Archivo: conceptos/variables.js
// Descripción: Misión 2 - Fundamentos de Variables y Tipos Primitivos en JS Vainilla
// ==========================================

// 1. Declaración de Constantes y Variables
// 'const' se utiliza para valores fijos que no cambian
const nombreEstudiante = "Ramon"; // Tipo String (Texto)
const anioNacimiento = 2009;      // Tipo Number (Número entero)
const anioActual = 2026;          // Tipo Number

// 2. Operación Matemática para calcular la edad dinámicamente
// 'let' se usa para datos que varían o se calculan
let edadCalculada = anioActual - anioNacimiento; // Operador de resta (-)

// 3. Tipos de Datos Primitivos Adicionales
let estaConectado = true; // Tipo Boolean (true / false)

// 4. Salida de datos en la Consola del Navegador (F12)
console.log("=== MISIÓN 2: VARIABLES Y CÁLCULO DE EDAD ===");
console.log("Estudiante: " + nombreEstudiante);
console.log("Año de nacimiento: " + anioNacimiento);
console.log("Año actual: " + anioActual);
console.log("Edad calculada: " + edadCalculada + " años");
console.log("Estado de conexión: " + estaConectado);