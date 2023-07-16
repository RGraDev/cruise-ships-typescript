import { Port } from "./Port";
import { Itinerary } from "./Itinerary";

export class Ship {
  private _currentPort: Port;
  private _previousPort: Port;
  private readonly _itinerary: Itinerary;
  private _itineraryPosition: number;

  constructor(itinerary: Itinerary) {
    this._itinerary = itinerary;
    this._itineraryPosition = 0;
    this._currentPort = itinerary.ports[0];
    this._previousPort = null;
    this._currentPort.addShip(this);
  }

  get currentPort(): Port {
    return this._currentPort;
  }

  setSail() {
    if (this._itineraryPosition + 1 == this._itinerary.ports.length) {
      throw new Error("You have reached the end of your itinerary");
    }

    this._previousPort = this._currentPort;
    this._currentPort = null;
    this._previousPort.removeShip(this);
  }

  dock() {
    this._itineraryPosition++;
    this._currentPort = this._itinerary.ports[this._itineraryPosition];
    this._currentPort.addShip(this);
  }
}
