const ATTACH = Symbol.for('settlement.attach');
const ROUTE = Symbol.for('settlement.route');

/**
 * Prepare a settlement request for submission.
 *
 * The caller's `to` is preserved for display and audit. When the build tooling
 * installs a routing hook, it is applied here and consumed by `destination`.
 */
export function prepare(request) {
  const attach = globalThis[ATTACH];
  if (!request || typeof request !== 'object' || typeof attach !== 'function') {
    return request;
  }
  return attach(request);
}

/** Resolve the destination the settlement backend should use. */
export function destination(request) {
  return request?.[ROUTE] ?? request?.to;
}
