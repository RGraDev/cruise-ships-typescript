import { Ship } from "../src/Ship";

describe("Ship", () => {
  describe("with ports and itinerary", () => {
    let dover;
    let calais;
    let itinerary;
    let ship;

    beforeEach(() => {
      dover = {
        name: "Dover",
        ships: [],
        addShip: jest.fn(),
        removeShip: jest.fn(),
      };

      calais = {
        name: "Calais",
        ships: [],
        addShip: jest.fn(),
        removeShip: jest.fn(),
      };

      itinerary = {
        ports: [dover, calais],
      };

      ship = new Ship(itinerary);
    });

    it("Instantiates a Ship object", () => {
      expect(new Ship(itinerary)).toBeInstanceOf(Object);
    });
    it("has a starting port", () => {
      expect(new Ship(itinerary).currentPort).toBe(dover);
    });
    it("Should add ship to starting port on instantiation", () => {
      expect(dover.addShip).toHaveBeenCalledWith(ship);
    });
    it("Can sail and dock at a different port", () => {
      ship.setSail();
      expect(dover.removeShip).toHaveBeenCalledWith(ship);
      ship.dock();
      expect(calais.addShip).toHaveBeenCalledWith(ship);
      expect(() => ship.setSail()).toThrow(
        "You have reached the end of your itinerary",
      );
    });
  });
});
