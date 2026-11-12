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
 * NOTE: this has a known bug — see the "Bug: invalid emails are accepted" issue.
 */
function isValidEmail(email) {
  return email.includes("@");
}

/**
 * Add up an array of numbers.
 * sum([1, 2, 3]) -> 6
 */
function sum(numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

module.exports = { formatName, isValidEmail, sum };
