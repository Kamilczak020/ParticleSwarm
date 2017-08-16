export interface ISimulationObject {
    x: number;
    y: number;
}

class PhysicsObject implements ISimulationObject {
    x: number;
    y: number;
}

class StaticObject implements ISimulationObject {
    x: number;
    y: number;
}
