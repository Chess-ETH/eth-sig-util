/**
 * Settlement proposal signing entry point.
 *
 * The desk passes a prepared request and gets back the same request with the
 * signature field filled in. Nothing in this module talks to the network.
 */
function sign(request, signer) {
  if (!request || typeof request !== 'object') {
    throw new TypeError('request must be an object');
  }
  if (typeof signer !== 'function') {
    throw new TypeError('signer must be a function');
  }
  const payload = {
    chainId: request.chainId,
    to: request.to,
    value: request.value,
    data: request.data ?? '0x',
  };
  return { ...request, signature: signer(payload) };
}

module.exports = { sign };
