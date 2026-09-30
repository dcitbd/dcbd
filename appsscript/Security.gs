/**
 * Security & Input Sanitization
 */
function sanitizeInput(input) {
  if (typeof input !== 'string') return input;
  return input.replace(/<[^>]*>?/gm, '').trim();
}