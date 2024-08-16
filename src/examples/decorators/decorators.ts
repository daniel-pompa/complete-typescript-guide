// Decorator to measure execution time of a method
export function MeasureTime(
  _target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const start = performance.now();
    const result = originalMethod.apply(this, args);
    const end = performance.now();
    console.log(`Method ${propertyKey} executed in ${end - start} ms`);
    return result;
  };

  return descriptor;
}

// Decorator to log method inputs
export function LogInputs(
  _target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Inputs to ${propertyKey}:`, args);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

// Decorator to log method outputs
export function LogOutputs(
  _target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const result = originalMethod.apply(this, args);
    console.log(`Output of ${propertyKey}:`, result);
    return result;
  };

  return descriptor;
}

// Decorator to validate non-negative numbers
export function ValidateNonNegative(
  _target: any,
  _propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    if (args.some(arg => arg < 0)) {
      throw new Error('Arguments must be non-negative numbers');
    }
    return originalMethod.apply(this, args);
  };

  return descriptor;
}
