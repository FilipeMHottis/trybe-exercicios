export function inputVazio(input) {
  if (input === '') throw new Error('Precisa digitar algo.');
  return true;
}
