import { logStyled } from '../../utils/log-styled';

export const TITLE: string = 'Generic Class Examples';

export const genericClassExamples = (): void => {
  // Interface for the dimensions of a shape
  interface Dimensions {
    width: number;
    height: number;
  }

  // Abstract class representing a shape
  abstract class Shape<T> {
    protected readonly dimensions: T;

    /**
     * Constructor for the Shape class
     * @param dimensions - Dimensions of the shape
     */
    constructor(dimensions: T) {
      this.dimensions = dimensions;
    }

    /**
     * Abstract method to calculate the area of the shape
     * @returns {number} Area of the shape
     */
    abstract calculateArea(): number;

    // Method to print the area description of the shape
    printArea(): void {
      console.log(this.getAreaDescription());
    }

    /**
     * Abstract method to get the area description of the shape
     * @returns {string} Description of the area
     */
    protected abstract getAreaDescription(): string;
  }

  // Class representing a Square
  class Square extends Shape<number> {
    constructor(sideLength: number) {
      if (sideLength <= 0) {
        throw new Error('The side length of the square must be a positive number.');
      }
      super(sideLength);
    }

    calculateArea(): number {
      return this.dimensions * this.dimensions;
    }

    protected getAreaDescription(): string {
      return `Square - Side: ${this.dimensions} cm, Area: ${this.calculateArea()} cm²`;
    }
  }

  // Class representing a Triangle
  class Triangle extends Shape<Dimensions> {
    constructor(base: number, height: number) {
      if (base <= 0 || height <= 0) {
        throw new Error('The base and height of the triangle must be positive numbers.');
      }
      super({ width: base, height: height });
    }

    calculateArea(): number {
      return (this.dimensions.width * this.dimensions.height) / 2;
    }

    protected getAreaDescription(): string {
      return `Triangle - Base: ${this.dimensions.width} cm, Height: ${
        this.dimensions.height
      } cm, Area: ${this.calculateArea()} cm²`;
    }
  }

  // Class representing a Circle
  class Circle extends Shape<number> {
    constructor(radius: number) {
      if (radius <= 0) {
        throw new Error('The radius of the circle must be a positive number.');
      }
      super(radius);
    }

    calculateArea(): number {
      return Math.PI * this.dimensions * this.dimensions;
    }

    protected getAreaDescription(): string {
      return `Circle - Radius: ${this.dimensions} cm, Area: ${this.calculateArea()} cm²`;
    }
  }

  // Class representing a Rectangle
  class Rectangle extends Shape<Dimensions> {
    constructor(width: number, height: number) {
      if (width <= 0 || height <= 0) {
        throw new Error(
          'The width and height of the rectangle must be positive numbers.'
        );
      }
      super({ width, height });
    }

    calculateArea(): number {
      return this.dimensions.width * this.dimensions.height;
    }

    protected getAreaDescription(): string {
      return `Rectangle - Width: ${this.dimensions.width} cm, Height: ${
        this.dimensions.height
      } cm, Area: ${this.calculateArea()} cm²`;
    }
  }

  // Usage of generic classes
  logStyled('Generic shape class');

  const square = new Square(5);
  square.printArea();

  const triangle = new Triangle(4, 3);
  triangle.printArea();

  const circle = new Circle(5);
  circle.printArea();

  const rectangle = new Rectangle(6, 4);
  rectangle.printArea();
};
