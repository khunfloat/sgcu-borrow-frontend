export default function IsExpired(expString: string) {
  const exp = parseInt(expString) * 1000;
  const currentTimestamp = Date.now();

  if (exp < currentTimestamp) {
    return true;
  }
  return false;
}
