/**
 * Emails to block from using Phantom Learning.
 * Add one email per line (or keep as array entries).
 * Comparison is case-insensitive.
 * This file is the only source for block checks.
 */
window.BLOCKED_EMAILS = [
  // "blocked@example.com",
];

window.isEmailBlocked = function(email) {
  if (!email || !window.BLOCKED_EMAILS || !window.BLOCKED_EMAILS.length) return false;
  var lower = String(email).toLowerCase();
  for (var i = 0; i < window.BLOCKED_EMAILS.length; i++) {
    if (String(window.BLOCKED_EMAILS[i]).toLowerCase() === lower) return true;
  }
  return false;
};
