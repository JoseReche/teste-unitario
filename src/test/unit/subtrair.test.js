const ServicoExercicio = require("../../services/service");

describe("ServicoExercicio", () => {
  let servicoExercicio;

  beforeEach(() => {
    servicoExercicio = new ServicoExercicio();
  });

///////////////////////////////////////////////////////////////////////////////////////

  test("Subtrair deve retornar a subtração de dois números", () => {
    const result = servicoExercicio.Subtrair(5, 3);
    expect(result).toBe(2);
  });

///////////////////////////////////////////////////////////////////////////////////////

  test("Subtrair deve retornar resultado negativo", () => {
    const result = servicoExercicio.Subtrair(3, 5);
    expect(result).toBe(-2);
  });

///////////////////////////////////////////////////////////////////////////////////////

  test("Subtrair com uma letra deve dar mensagem de erro dizendo que o numero e invalido", () => {
    expect(() => {
      servicoExercicio.Subtrair('a', 3);
    }).toThrowError("Os valores não são números");
});

///////////////////////////////////////////////////////////////////////////////////////

  test("Subtrair com duas letra deve dar mensagem de erro dizendo que os numeros e invalido", () => {
    expect(() => {
      servicoExercicio.Subtrair('a', 'b');
    }).toThrowError("Os valores não são números");
  });

///////////////////////////////////////////////////////////////////////////////////////

});
