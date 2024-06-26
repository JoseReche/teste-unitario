const ServicoExercicio = require("../../services/service");

describe("ServicoExercicio", () => {
  let servicoExercicio;

  beforeEach(() => {
    servicoExercicio = new ServicoExercicio();
  });

///////////////////////////////////////////////////////////////////////////////////////

  test("Multiplicar deve retornar o resultado da multiplicação", () => {
    const result = servicoExercicio.Multiplicar(2, 3);
    expect(result).toBe(6);
  });

///////////////////////////////////////////////////////////////////////////////////////

  test("Multiplicar com um numero deve dizer que os numeros são invalidos", () => {
    expect(() => {
      servicoExercicio.Multiplicar('c', 3);
    }).toThrowError("Os valores não são números");
});

///////////////////////////////////////////////////////////////////////////////////////

  test("Multiplicar com duas letras deve dizer que os numeros são invalidos", () => {
    expect(() => {
      servicoExercicio.Multiplicar("a", 'd');
    }).toThrowError("Os valores não são números");
  });

});