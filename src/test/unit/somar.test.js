const ServicoExercicio = require("../../services/service");

describe("ServicoExercicio", () => {
  let servicoExercicio;

  beforeEach(() => {
    servicoExercicio = new ServicoExercicio();
  });

///////////////////////////////////////////////////////////////////////////////////////

  test("Somar deve retornar a soma de dois numeros positivos", () => {
    const result = servicoExercicio.Somar(2, 3);
    expect(result).toBe(5);
  });

///////////////////////////////////////////////////////////////////////////////////////

  test("Somar deve retornar a soma de dois numeros e dar negativo", () => {
    const result = servicoExercicio.Somar(2, -3);
    expect(result).toBe(-1);
  });

///////////////////////////////////////////////////////////////////////////////////////

  test("Somar deve lançar erro quando um dos digitos não é número", () => {
    expect(() => { servicoExercicio.Somar('a', 3);
     }).toThrowError("Os valores não são números");
  });

///////////////////////////////////////////////////////////////////////////////////////

  test("Somar deve lançar erro quando ambos os digitos não são números", () => {
    expect(() => { servicoExercicio.Somar('a', 'b') }).toThrowError("Os valores não são números");
  });

///////////////////////////////////////////////////////////////////////////////////////

});