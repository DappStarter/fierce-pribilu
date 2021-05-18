require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan return situate clump harvest glove equal ghost'; 
let testAccounts = [
"0x8aeec5a8e8b707c3798d67d79f7c647db8e7bc4dd5843c169cef343b70ec1a5d",
"0x7dc058e21b4e0f887b1d29f368008e995a8e642e14594c02353ef46afa3ee7d3",
"0xd3701ec71ceea5e7f4185d5fd07789ac3ac9071f4cc33e0e26ef4023fbdc81e3",
"0x5e2b42630ff7415371ea295077579abf1aee8cae39614d4e3f4be24b9f317ba3",
"0x07fbdd82c83c29a2b5120c7f22d23b55b3d7a9e3c877e82ca96692216ea650ae",
"0x152765c81bad74a46f779ac340f5b98de54390861b2e9c8bf35fbb016577ea97",
"0x38ae43dd8e1a393e895291c5113f2dd46b354a0e79c76aea224a315cf78752d7",
"0x62cd547785aced6b53f1b83688832de5d5e43f1cd583f71da6fa3b714d027f88",
"0xd718b5d9424d3fbb2cdc38b5065a6371a498a5d502139d8b3e8dcb58001d2486",
"0x29a3ae1eb9994daf24cc9e3d4f5755ac0e6a825503408933fb3e7b0dc00d29d9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
