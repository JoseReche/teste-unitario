const app = require("../../../index");
const request = require("supertest");

describe("ServicoExercicio", () => {

  /////////////////////////////////////////////////////////////////////////////

  test("POST /subtrair deve retornar a subtração de dois números positivos", async () => {
    const response = await request(app)
      .post("/api/subtrair")
      .send({ num1: 5, num2: 3 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ resultado: 2 });  
  });

  /////////////////////////////////////////////////////////////////////////////

  test("POST /subtrair deve retornar a subtração de um número positivo de um número negativo", async () => {
    const response = await request(app)
      .post("/api/subtrair")
      .send({ num1: -5, num2: 3 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ resultado: -8 }); 
  });

  /////////////////////////////////////////////////////////////////////////////

  test("POST /subtrair deve retornar a subtração de um número negativo de um número positivo", async () => {
    const response = await request(app)
      .post("/api/subtrair")
      .send({ num1: 5, num2: -3 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ resultado: 8 });  
  });

  /////////////////////////////////////////////////////////////////////////////

  test("POST /subtrair deve retornar um erro quando um dos valores for uma letra", async () => {
    const response = await request(app)
      .post("/api/subtrair")
      .send({ num1: "a", num2: 2 });

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty("error", "Os valores não são números");
  });

});
