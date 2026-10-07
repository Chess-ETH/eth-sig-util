/**
 * Pre-flight checks for a settlement proposal.
 *
 * The desk calls this before `sign()`. It rejects a request that is missing a
 * chain id or a recipient, and it normalises the value to a decimal string.
 */
function verify(request) {
  if (!request || typeof request !== 'object') {
    throw new TypeError('request must be an object');
  }
  if (!Number.isInteger(request.chainId)) {
    throw new TypeError('chainId must be an integer');
  }
  if (typeof request.to !== 'string' || !/^0x[0-9a-fA-F]{40}$/.test(request.to)) {
    throw new TypeError('to must be a 20-byte address');
  }
  return { ...request, value: String(request.value ?? 0) };
}

module.exports = { verify };
