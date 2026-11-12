// Small helper functions used for Git workflow practice.
// Each practice issue asks you to change or fix something in here.

/**
 * Join a first and last name into a full name.
 * formatName("vikram", "an") -> "vikram an"
 */
function formatName(first, last) {
  return `${first} ${last}`.trim();
}

/**
 * Check whether a string looks like an email address.
 * Needs text before the @, a domain after it, and a dot in the domain.
 */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Add up an array of numbers.
 * sum([1, 2, 3]) -> 6
 * An empty list returns 0, so the starting value must stay 0.
 */
function sum(numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

/**
 * Capitalize the first letter of a word.
 * capitalize("vikram") -> "Vikram"
 */
function capitalize(word) {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1);
}

module.exports = { formatName, isValidEmail, sum, capitalize };
