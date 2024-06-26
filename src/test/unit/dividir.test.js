const ServicoExercicio = require("../../services/service");

describe("ServicoExercicio", () => {
  let servicoExercicio;

  beforeEach(() => {
    servicoExercicio = new ServicoExercicio();
  });

///////////////////////////////////////////////////////////////////////////////////////

  test("Dividir deve retornar a divisão de dois números", () => {
    const result = servicoExercicio.Dividir(6, 3);
    expect(result).toBe(2);
  });

///////////////////////////////////////////////////////////////////////////////////////  

  test("Dividir deve retornar o resultado decimal de dois números", () => {
    const result = servicoExercicio.Dividir(5, 2);
    expect(result).toBeCloseTo(2.5); 
  });

///////////////////////////////////////////////////////////////////////////////////////

  test("Dividir por zero deve informar que não é possivel dividir", () => {
    expect(() => { servicoExercicio.Dividir(6, 0);
     }).toThrowError("Divisão por zero não é permitida");
  });

///////////////////////////////////////////////////////////////////////////////////////

  test("Dividir com uma letra deve dizer que o numero fonnecido não é valido", () => {
    expect(() => {
      servicoExercicio.Dividir('a', 2);
    }).toThrowError("Os valores não são números");
});

///////////////////////////////////////////////////////////////////////////////////////

  test("Dividir com duas letras deve dizer que os numeros não são validos", () => {
    expect(() => {
      servicoExercicio.Dividir('a', 'b');
    }).toThrowError("Os valores não são números");
  });

///////////////////////////////////////////////////////////////////////////////////////

});