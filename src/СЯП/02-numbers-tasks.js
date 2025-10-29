/**
 * Returns an area of a rectangle given by width and height.
 */
function getRectangleArea(width, height) {
  return width * height;
}

/**
 * Returns a circumference of circle given by radius.
 */
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

/**
 * Returns an average of two given numbers.
 */
function getAverage(value1, value2) {
  // Чтобы избежать переполнения при больших числах
  return value1 / 2 + value2 / 2;
}

/**
 * Returns a distance between two points by cartesian coordinates.
 */
function getDistanceBetweenPoints(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Returns a root of linear equation a*x + b = 0
 */
function getLinearEquationRoot(a, b) {
  return -b / a;
}

/**
 * Returns an angle (in radians) between two vectors given by xi and yi
 */
function getAngleBetweenVectors(x1, y1, x2, y2) {
  const dot = x1 * x2 + y1 * y2;
  const mag1 = Math.sqrt(x1 * x1 + y1 * y1);
  const mag2 = Math.sqrt(x2 * x2 + y2 * y2);
  return Math.acos(dot / (mag1 * mag2));
}

/**
 * Returns a last digit of a integer number.
 */
function getLastDigit(value) {
  return Math.abs(value) % 10;
}

/**
 * Returns a number by given string representation.
 */
function parseNumberFromString(value) {
  return Number(value);
}

/**
 * Returns a diagonal length of the rectangular parallelepiped given by its sides a,b,c.
 */
function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a * a + b * b + c * c);
}

/**
 * Returns the number rounded to specified power of 10.
 */
function roundToPowerOfTen(num, pow) {
  const factor = 10 ** pow;
  return Math.round(num / factor) * factor;
}

/**
 * Returns true is the number is prime; otherwise false.
 */
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

/**
 * Tries to convert value to number and returns it if conversion was successful;
 * otherwise returns default value passed as a second argument.
 */
function toNumber(value, def) {
  const num = Number(value);
  return Number.isNaN(num) ? def : num;
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
};
