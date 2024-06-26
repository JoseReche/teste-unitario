const app = require("../../../index");
const request = require("supertest");

describe("Testes de API para ExercicioController - Multiplicação", () => {

  ////////////////////////////////////////////////////////////////////////////////

  ///// não quer enviar para o Git HAAAAAAAAAAAAAAAAAA
  /// teste
  ////atualiza 
  
  test("POST /multiplicar deve retornar a multiplicação de dois números positivos", async () => {
    const response = await request(app)
      .post("/api/multiplicar")
      .send({ num1: 5, num2: 3 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ resultado: 15 });
  });

  /////////////////////////////////////////////////////////////////////////////

  test("POST /multiplicar deve retornar a multiplicação de um número positivo por um número negativo", async () => {
    const response = await request(app)
      .post("/api/multiplicar")
      .send({ num1: 5, num2: -3 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ resultado: -15 });
  });

  /////////////////////////////////////////////////////////////////////////////

  test("POST /multiplicar deve retornar a multiplicação de um número negativo por um número positivo", async () => {
    const response = await request(app)
      .post("/api/multiplicar")
      .send({ num1: -5, num2: 3 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ resultado: -15 });
  });

  /////////////////////////////////////////////////////////////////////////////

  test("POST /multiplicar deve retornar a multiplicação de dois números negativos", async () => {
    const response = await request(app)
      .post("/api/multiplicar")
      .send({ num1: -5, num2: -3 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ resultado: 15 });
  });

  /////////////////////////////////////////////////////////////////////////////

  test("POST /multiplicar deve retornar um erro quando um dos valores for letra", async () => {
    const response = await request(app)
      .post("/api/multiplicar")
      .send({ num1: "a", num2: 2 });

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty("error", "Os valores não são números");
  });

});