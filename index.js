// Generate 4 key-pairs using the derivation Path
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import { Buffer } from "buffer";
import nacl from "tweetnacl";

// Generate the mnemonic -> 12 words string
const mnenomic = generateMnemonic();



// Generate the seed
const seed = mnemonicToSeedSync(mnenomic);

for (let i = 0; i < 4; i++) {
  // Derivation Path
  const path = `m/44'/501'/${i}'/0'`;

  // Derive a seed from the given path
  // Its a dict with (Key, chainCode) as Key's
  const derivedSeed = derivePath(path, Buffer.from(seed, "hex")).key;

  // generate a key pair from the derived seed
  const keyPair = nacl.sign.keyPair.fromSeed(derivedSeed);

  const publicKey = Keypair.fromSecretKey(
    keyPair.secretKey
  ).publicKey.toBase58();

  console.log("Public Key: ", publicKey);

}
