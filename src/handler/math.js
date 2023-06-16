import { sum, subtract, multiply, divide, mean } from "../lib/math";

/**
 * Math is an API endpoint that allows you to return a result based off inputs.
 * This MUST support all available math functions defined in the "/lib/math.js".
 *
 * @param body
 */
const operations = {
  sum,
  subtract,
  multiply,
  divide,
  mean,
};

// some basic type-checking
// maybe replace with express-validator?
const validateTypes = (a, b, operation) => {
  if (operation === "mean") {
    return Array.isArray(a);
  }
  if (a !== undefined && typeof a !== "number") {
    return false;
  }
  if (b !== undefined && typeof b !== "number") {
    return false;
  }

  return true;
};

export function math(body) {
  const { a, b, operation } = body;
  let result = null;

  if (validateTypes(a, b, operation) && operations[operation]) {
    result = operations[operation](a, b);
  }

  return {
    result,
  };
}
