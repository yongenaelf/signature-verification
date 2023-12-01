const secp256k1 = require("secp256k1");
const { wallet } = require("aelf-sdk");
const { getAddressFromPubKey } = wallet;

export function recoverAddress(message: string, signed: string) {
  const messageHashBuffer = Buffer.from(message, "hex");
  const signedBuffer = Buffer.from(signed, "base64");
  const signatureBuffer = signedBuffer.slice(0, 64);
  const recoveryFlag = signedBuffer.slice(-1)[0];

  const recoveredPubkey = secp256k1.recover(
    messageHashBuffer, // 32 byte hash of message
    signatureBuffer, // 64 byte signature of message (not DER, 32 byte R and 32 byte S with 0x00 padding)
    recoveryFlag, // number 1 or 0. This will usually be encoded in the base64 message signature
    false // true if you want result to be compressed (33 bytes), false if you want it uncompressed (65 bytes) this also is usually encoded in the base64 signature
  );

  return getAddressFromPubKey({ encode: () => recoveredPubkey });
}
