import { Ship } from "./Ship";

export class Port {
  private _name: string;
  private _ships: Ship[] = [];

  constructor(name: string) {
    this._name = name;
  }

  addShip(ship: Ship) {
    this._ships.push(ship);
  }

  removeShip(ship: Ship) {
    const index = this._ships.indexOf(ship);
    this._ships.splice(index, 1);
  }
}
