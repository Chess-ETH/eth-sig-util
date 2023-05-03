/** Small formatting helpers shared by the build scripts. */
export function shortAddress(value) {
  if (typeof value !== 'string' || value.length < 12) {
    return String(value ?? '');
  }
  return `${value.slice(0, 6)}...${value.slice(-4)}`;
}

export function amount(value) {
  const n = Number(value ?? 0);
  return Number.isFinite(n) ? n.toFixed(4).replace(/\.?0+$/, '') : '0';
}
