import "../style/index.scss";
import { Shape } from "./shape";
import { Rectangle } from "./rectangle";
import { Triangle } from "./triangle";

let canvas = document.getElementById("drawer1") as HTMLCanvasElement;
canvas.width = 800;
canvas.height = 600;
let ctx = canvas.getContext("2d");

let rect1 = new Rectangle(60, 130, 80, 100, "#FF0000", ctx);
rect1.draw();
console.log("rect1 area", rect1.area());

let tri1 = new Triangle(100, 40, 100, "#00FF00", ctx);
tri1.draw();
console.log("tri1 area", tri1.area());
