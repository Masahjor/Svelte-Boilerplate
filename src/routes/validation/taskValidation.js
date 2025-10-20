// src/lib/validation/taskValidation.js
export function validateTaskText(text) {
  return text && text.trim().length > 0;
}
