const app = require("../../../index");
const request = require("supertest");

describe("ServicoExercicio", () => {

  /////////////////////////////////////////////////////////////////////////////

  test("POST /dividir deve retornar a divisão de dois números positivos", async () => {
    const response = await request(app)
      .post("/api/dividir")
      .send({ num1: 10, num2: 2 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ resultado: 5 });
  });

  /////////////////////////////////////////////////////////////////////////////

  test("POST /dividir deve retornar a divisão de um número positivo por um número negativo", async () => {
    const response = await request(app)
      .post("/api/dividir")
      .send({ num1: 10, num2: -2 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ resultado: -5 });
  });

  /////////////////////////////////////////////////////////////////////////////
  test("POST /dividir deve retornar a divisão de um número negativo por um número positivo", async () => {
    const response = await request(app)
      .post("/api/dividir")
      .send({ num1: -10, num2: 2 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ resultado: -5 });
  });

  /////////////////////////////////////////////////////////////////////////////
  test("POST /dividir deve retornar um erro quando o divisor for zero", async () => {
    const response = await request(app)
      .post("/api/dividir")
      .send({ num1: 10, num2: 0 });

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty("error", "Divisão por zero não é permitida");
  });

  /////////////////////////////////////////////////////////////////////////////
  test("POST /dividir deve retornar um erro quando um dos valores for letra", async () => {
    const response = await request(app)
      .post("/api/dividir")
      .send({ num1: "a", num2: 2 });

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty("error", "Os valores não são números");
  });

});