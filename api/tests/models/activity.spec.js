const supertest = require("supertest");
const server = require("../../src/app.js");
const { Country, conn } = require("../../src/db.js");

const api = supertest(server);

describe("Country model", () => {
  beforeAll(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );

  describe("Validators", () => {
    beforeEach(() => Country.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Country.create({
          id: "ARG",
          flag: "https://flagcdn.com/w320/ar.png",
          region: "Americas",
          capital: "Buenos Aires",
          subregion: "South America",
        })
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Country.create({
          id: "ARG",
          name: "Argentina",
          flag: "https://flagcdn.com/w320/ar.png",
          region: "Americas",
          capital: "Buenos Aires",
          subregion: "South America",
        });
      });

      it("should throw an error if have an invalid ID", (done) => {
        Country.create({
          id: "ARGEN",
          name: "Argentina",
          flag: "https://flagcdn.com/w320/ar.png",
          region: "Americas",
          capital: "Buenos Aires",
          subregion: "South America",
        })
          .then(() => done(new Error("ID type character varying(3)")))
          .catch(() => done());
      });

      it("should throw an error if have an invalid population type", (done) => {
        Country.create({
          id: "ARGEN",
          name: "Argentina",
          flag: "https://flagcdn.com/w320/ar.png",
          region: "Americas",
          capital: "Buenos Aires",
          subregion: "South America",
          population: "45376763",
        })
          .then(() => done(new Error("population must be an INTEGER")))
          .catch(() => done());
      });
      it("should work when its a valid type", () => {
        Country.create({
          id: "ARG",
          name: "Argentina",
          flag: "https://flagcdn.com/w320/ar.png",
          region: "Americas",
          capital: "Buenos Aires",
          subregion: "South America",
          population: 45376763,
        });
      });
    });
  });
});
