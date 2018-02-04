import { Shape } from "./shape";
export class Triangle extends Shape {
  public height: number;
  public constructor(
    public pointX = 0,
    public pointY = 0,
    public sideLength: number,
    public color = "#FFFFFF",
    private ctx: CanvasRenderingContext2D
  ) {
    super();
    this.height = Math.sqrt(
      Math.pow(this.sideLength, 2) - Math.pow(this.sideLength / 2, 2)
    );
  }

  public draw(drawX = this.pointX, drawY = this.pointY) {
    this.ctx.beginPath();
    this.ctx.moveTo(drawX, drawY);
    this.ctx.lineTo(drawX - this.sideLength / 2, drawY + this.height);
    this.ctx.lineTo(drawX + this.sideLength / 2, drawY + this.height);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  public area() {
    return this.sideLength * this.height / 2;
  }
}
