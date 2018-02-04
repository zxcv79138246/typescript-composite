import { Shape } from "./shape";
export class Rectangle extends Shape {
  public constructor(
    public pointX = 0,
    public pointY = 0,
    public width: number,
    public height: number,
    public color = "#FFFFFF",
    private ctx: CanvasRenderingContext2D
  ) {
    super();
  }

  public draw(drawX = this.pointX, drawY = this.pointY) {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(drawX, drawY, this.width, this.height);
  }

  public area() {
    return this.width * this.height;
  }
}
