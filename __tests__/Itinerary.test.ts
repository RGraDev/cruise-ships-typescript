import { Itinerary } from "../src/Itinerary";

describe("constructor", () => {
  describe("create mock ports", () => {
    let dover;
    let calais;
    let itinerary;

    beforeEach(() => {
      dover = {
        name: "Dover",
        ships: [],
      };

      calais = {
        name: "Calais",
        ships: [],
      };

      itinerary = new Itinerary([dover, calais]);
    });

    it("creates a new Itinerary instance ", () => {
      expect(itinerary).toBeInstanceOf(Itinerary);
    });
    it("should have a ports property", () => {
      expect(itinerary).toHaveProperty("ports");
    });
    it("can have ports", () => {
      expect(itinerary.ports).toEqual([dover, calais]);
    });
  });
});
