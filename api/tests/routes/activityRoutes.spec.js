const supertest = require("supertest");
const server = require("../../src/app.js");
const updateTotal = require("../../src/controllers/country.js");
const { Country, Activity, conn } = require("../../src/db.js");

const api = supertest(server);

describe("Activity routes", () => {
  beforeAll(() => {
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
    Activity.sync({ force: true });
  });

  jest.setTimeout(10000);

  describe("GET /activities", () => {
    beforeAll(async () => {
      await updateTotal();
      await api.post("/activities").send({
        name: "Remo",
        difficulty: "5",
        duration: "12",
        season: "Spring",
        countries: ["ARG"],
      });
    });

    it("should get status code 200 to all activities", async () => {
      const resp = await api.get("/activities");

      expect(resp.statusCode).toBe(200);
    });
  });

  describe("POST /activities", () => {
    beforeAll(async () => {
      await updateTotal();
    });

    it("should get 200 if Activity is created", async () => {
      const resp = await api.post("/activities").send({
        name: "remo",
        difficulty: "5",
        duration: "12",
        season: "Spring",
        countries: ["ARG"],
      });
      expect(resp.statusCode).toBe(200);
    });

    it("should get 404 if some data is missing", async () => {
      const resp = await api.post("/activities").send({
        difficulty: "5",
        duration: "12",
        season: "Spring",
      });
      expect(resp.statusCode).toBe(404);
      expect(resp.text).toBe("Missing obligatory data");
    });

    it("Should get 404 if range is not respeted", async () => {
      const resp = await api.post("/activities").send({
        name: "John",
        difficulty: "8",
        duration: "12",
        season: "Spring",
        countries: ["ARG"],
      });
      expect(resp.statusCode).toBe(404);
      expect(resp.text).toBe("Range must be respected");
    });

    it("Should get 404 if isn't at list 1 country", async () => {
      const resp = await api.post("/activities").send({
        name: "Paul",
        difficulty: "8",
        duration: "12",
        season: "Spring",
        countries: [],
      });
      expect(resp.statusCode).toBe(404);
      expect(resp.text).toBe("At least one Country is required");
    });

    it("should get 404 if pokemon name already exist", async () => {
      await api.post("/activities").send({
        name: "Ringo",
        difficulty: "8",
        duration: "12",
        season: "Spring",
        countries: ["ARG"],
      });

      const resp = await api.post("/activities").send({
        name: "Ringo",
        difficulty: "8",
        duration: "12",
        season: "Spring",
        countries: ["ARG"],
      });
      expect(resp.statusCode).toBe(404);
    });
  });
});


