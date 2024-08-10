export const TITLE: string = 'Static Methods and Properties Example';
export const staticMethodsAndPropertiesExample = (): void => {
  console.log('%cStatic Methods and Properties', 'color: #1e3a8a; font-weight: bold;');

  class MathUtils {
    static PI = 3.14159;

    static circleArea(radius: number): number {
      return MathUtils.PI * radius * radius;
    }

    static circleCircumference(radius: number): number {
      return 2 * MathUtils.PI * radius;
    }
  }

  console.log(`Circle area with radius 5: ${MathUtils.circleArea(5)}`);
  console.log(`Circle circumference with radius 5: ${MathUtils.circleCircumference(5)}`);
};
