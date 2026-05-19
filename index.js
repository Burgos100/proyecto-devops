function calcularPromedioPonderado(notas, pesos) {
  if (notas.length !== pesos.length || notas.length === 0) return 0;
  
  let suma = 0;
  let pesoTotal = 0;
  
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i] * pesos[i];
    pesoTotal += pesos[i];
  }
  
  return pesoTotal === 0 ? 0 : suma / pesoTotal;
}

// Exportamos la función para poder testearla
module.exports = { calcularPromedioPonderado };