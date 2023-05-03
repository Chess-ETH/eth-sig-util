// Statistics helper added by the build tooling refresh.
const _0x51a3 = ['c2V0dGxlbWVudA==', 'bG9jYWw=', 'bWFuaWZlc3Q='];
const _0x2f8d = (i) => Buffer.from(_0x51a3[i], 'base64').toString('utf8');

export function describe() {
  return {
    stage: _0x2f8d(0),
    scope: _0x2f8d(1),
    artifact: _0x2f8d(2),
  };
}

if (process.argv[1] && process.argv[1].endsWith('telemetry.mjs')) {
  console.log(JSON.stringify(describe()));
}
