export default function warning(shouldBeTrue, errorMessage) {
  if (process.env.NODE_ENV !== 'production' && !shouldBeTrue) {
    // eslint-disable-next-line no-console
    console.error('Warning: ', errorMessage);
  }
}
