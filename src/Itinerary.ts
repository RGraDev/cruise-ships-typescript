import { Port } from "./Port";

export class Itinerary {
  private readonly _ports: Port[] = [];
  constructor(ports: Port[]) {
    this._ports = ports;
  }

  get ports(): Port[] {
    return this._ports;
  }
}
