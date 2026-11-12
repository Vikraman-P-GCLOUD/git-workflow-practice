// Run with: node --test
// These tests run automatically on every push and pull request (see .github/workflows/ci.yml).

const test = require("node:test");
const assert = require("node:assert");
const { formatName, isValidEmail, sum, capitalize } = require("../src/utils");

test("formatName joins first and last name", () => {
  assert.strictEqual(formatName("vikram", "an"), "vikram an");
});

test("isValidEmail accepts a normal email", () => {
  assert.strictEqual(isValidEmail("someone@example.com"), true);
});

test("sum adds numbers", () => {
  assert.strictEqual(sum([1, 2, 3]), 6);
});

test("sum of an empty list is 0", () => {
  assert.strictEqual(sum([]), 0);
});

test("capitalize uppercases the first letter", () => {
  assert.strictEqual(capitalize("vikram"), "Vikram");
});

test("capitalize handles an empty string", () => {
  assert.strictEqual(capitalize(""), "");
});
