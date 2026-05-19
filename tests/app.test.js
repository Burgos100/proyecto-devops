const { calcularPromedioPonderado } = require('../index');

test('calcula correctamente el promedio ponderado', () => {
  const notas = [50, 60, 70];
  const pesos = [0.3, 0.3, 0.4];
  // 50*0.3(15) + 60*0.3(18) + 70*0.4(28) = 61
  expect(calcularPromedioPonderado(notas, pesos)).toBe(61);
});