export function sum(a, b) {
  if (a === undefined || b === undefined) {
    return null;
  }
  return a + b;
}

export function subtract(a, b) {
  if (a === undefined || b === undefined) {
    return null;
  }
  return a - b;
}

export function divide(a, b) {
  if (a === undefined || b === undefined || b === 0) {
    return null;
  }
  return a / b;
}

export function multiply(a, b) {
  if (a === undefined || b === undefined) {
    return null;
  }
  return a * b;
}

export function mean(a) {
  let sum = 0;

  // return null if array is empty
  if (a.length === 0) {
    return null;
  }
  for (const num of a) {
    // return null if one of the outputs is null
    if (typeof num !== "number") {
      return null;
    }
    sum += num;
  }

  return sum / a.length;
}
