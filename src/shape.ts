export class Shape {
  public pointX: number;
  public pointY: number;
  public constructor() {}

  public draw(drawX = this.pointX, drawY = this.pointY) {
    throw "未實作 draw";
  }
  public area(): number {
    throw "未實作 area";
  }
}
