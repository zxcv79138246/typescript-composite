export interface Shape {
  pointX: number;
  pointY: number;

  draw(drawX: number, drawY: number): void;

  area(): number;
}
