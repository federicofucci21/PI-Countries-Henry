/* eslint-disable import/no-extraneous-dependencies */
const supertest = require("supertest");
const server = require("../../src/app.js");
const { Country, conn } = require("../../src/db.js");

const api = supertest(server);

describe("Country routes", () => {
  beforeAll(() => {
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
    Country.sync({ force: false });
  });

  jest.setTimeout(10000);

  describe("GET /countries", () => {
    it("should get status code 200 to all countries", async () => {
      const resp = await api.get("/countries");
      expect(resp.statusCode).toBe(200);
    });

    it("should get status code 200 search existing country by name", async () => {
      const resp = await api.get("/countries?name=Argentina");
      expect(resp.statusCode).toBe(200);
    });

    it("should get status code 404 search by name unexisting country", async () => {
      const resp = await api.get("/countries?name=Rosario");
      expect(resp.statusCode).toBe(404);
    });

    it("should get status code 200 search country by id", async () => {
      const resp = await api.get("/countries/ARG");
      expect(resp.statusCode).toBe(200);
      expect(resp.body.name).toBe("Argentina");
    });

    it("should get status code 404 if id doesn't exist", async () => {
      const resp = await api.get("/countries/AAAA");
      expect(resp.statusCode).toBe(404);
      expect(resp.text).toBe("Country Not Found");
    });
  });
});
