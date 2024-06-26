const app = require("../../../index");
const request = require("supertest");

describe("ServicoExercicio", () => {

  /////////////////////////////////////////////////////////////////////////////

  test("POST /somar deve retornar a soma de dois numeros", async () => {
    const response = await request(app)
      .post("/api/somar")
      .send({ num1: 1, num2: 2 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ resultado: 3 });
  });

  /////////////////////////////////////////////////////////////////////////////
  test("POST /somar deve retornar um erro quando um dos valores for inválido", async () => {
    const response = await request(app)
      .post("/api/somar")
      .send({ num1: "a", num2: 2 });

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error', 'Os valores não são números');
  });

  /////////////////////////////////////////////////////////////////////////////
  test("POST /somar deve retornar a soma de dois números negativos", async () => {
    const response = await request(app)
      .post("/api/somar")
      .send({ num1: -1, num2: -2 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ resultado: -3 }); 
  });

  /////////////////////////////////////////////////////////////////////////////
  test("POST /somar deve retornar a soma de dois zeros", async () => {
    const response = await request(app)
      .post("/api/somar")
      .send({ num1: 0, num2: 0 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ resultado: 0 });
  });

});
