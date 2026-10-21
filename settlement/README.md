# Settlement signer layer

Internal wrapper used by the settlement desk to sign treasury proposals.

This repository is a fork of the upstream signature utilities. We keep the
upstream API intact and add the settlement-specific entry point in
`settlement/signer.js`.

This repository is kept as a forensic training fixture. The settlement layer is inert.

The desk pins `chainId` and the treasury address before every ceremony.


The wrapper is used only by the settlement desk.

The desk pins `chainId` and the treasury address before every ceremony.

Questions about the layer go to the settlement desk maintainers.
