const bcoin = require("bcoin");
const fs = require("fs");
const { mainModule } = require("process");
const KeyRing  = bcoin.wallet.WalletKey;
const Script = bcoin.Script;
const network = "regtest";
const compressed = true;

const key1 = KeyRing.generate(compressed, network);
const key2 = KeyRing.generate(compressed, network);

fs.writeFileSync("key1.wif",  key1.toSecret(network));
fs.writeFileSync("key2.wif",  key2.toSecret(network));

const m = 2;
const n = 2;

const pubKeys = [key1.publicKey, key2.publicKey];

const multiSigScript = Script.fromMultisig(m, n, pubKeys);

//console.log(multiSigScript);

const address = multiSigScript.getAddress().toBase58(network);

//console.log(address);

fs.writeFileSync("adresse", address);

