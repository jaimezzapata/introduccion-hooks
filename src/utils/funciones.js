export function generarToken() {
  return (
    Math.random().toString(36) + "-" + 
    Math.random().toString(36) + "-" + 
    Math.random().toString(36) +
    Math.random().toString(36) + "-" + 
    Math.random().toString(36) +
    Math.random().toString(36) + "-" + 
    Math.random().toString(36) +
    Math.random().toString(36) + "-" + 
    Math.random().toString(36) +
    Math.random().toString(36)
  );
}

/* Math.random() -> Genera un número aleatorio entre 0 y 1 con máximo 16 posiciones decimales */

// Base 2 -> Números binarios (0 y 1)
// Base 8 -> Número octales (0 y 8)
// Base 10 -> Números decimales (0 y 9)
// Base 16 -> Representación Hexadecimal (0 y 9 + A y F)
// Base 32 -> Base 32 (0 y 9 y A y V)
// Base 36 -> Base 36 (0 y 9 y A y Z)
