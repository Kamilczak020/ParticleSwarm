import { Simulation } from './components/simulation';

let canvasElements = [];

let canvas1 = <HTMLCanvasElement> document.getElementById("simCanvas1");
canvasElements.push(canvas1);

let canvas2 = <HTMLCanvasElement> document.getElementById("simCanvas2");
canvasElements.push(canvas2);

let Sim = new Simulation(canvasElements);
