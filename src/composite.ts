import { Shape } from "./shape";

export class Composite implements Shape {
  private list: Array<Shape>;

  public constructor(public pointX = 0, public pointY = 0) {
    this.list = [];
  }

  public add(shape: Shape) {
    this.list.push(shape);
  }

  public clear() {
    this.list = [];
  }

  public draw(drawX = 0, drawY = 0) {
    this.list.map(shape => {
      let shapeDrawX = drawX + shape.pointX;
      let shapeDrawY = drawY + shape.pointY;
      shape.draw(shapeDrawX, shapeDrawY);
    });
  }

  public area() {
    let totalArea: number = 0;
    this.list.map(shape => {
      totalArea = totalArea + shape.area();
    });

    return totalArea;
  }
}
