import "../style/index.scss";
import { Canvas } from "./canvas";

let canvas = document.getElementById("drawer1") as HTMLCanvasElement;
canvas.width = 800;
canvas.height = 600;
let ctx = canvas.getContext("2d");
