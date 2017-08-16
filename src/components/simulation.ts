import { Vector2D } from './vector';
import { ISimulationObject } from './simulationObject';

export class Simulation {
    private _canvasElements: Array<HTMLCanvasElement> = [];
    private _objects: Array<ISimulationObject> = [];

    constructor(canvasElements: Array<HTMLCanvasElement>) {
        for (let i = 0, len = canvasElements.length; i < len; i++)
        {
            if (canvasElements[i] === null) {
                throw new ReferenceError('Canvas element does not exist - possibly incorrect reference?');
            }
            else if ( !(canvasElements[i] instanceof HTMLCanvasElement) ) {
                throw new TypeError('Referenced Element is not of HTMLCanvasElement type.');
            }
            else {
                this._canvasElements.push(canvasElements[i]);
            }
        }
    }

    addObject(object: ISimulationObject) {

    }
}
