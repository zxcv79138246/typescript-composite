import "../style/index.scss";
import { Shape } from "./shape";
import { Rectangle } from "./rectangle";
import { Triangle } from "./triangle";
import { Composite } from "./composite";

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

let house = new Composite();
house.add(rect1);
house.add(tri1);
house.draw(300, 200);

console.log("houseArea", house.area());

let rect2 = new Rectangle(200, 200, 50, 50, "#0000FF", ctx);
rect2.draw();
console.log("rect2 area", rect2.area());

let composite2 = new Composite();
composite2.add(house);
composite2.add(rect2);
composite2.draw(500, 10);
console.log("composite2 area", composite2.area());
