require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enroll supply suggest name reward stereo pulse install opera forget gauge'; 
let testAccounts = [
"0x8298db6fc8ca866a84c0767bfa31c4b4b36af5f02a50268c09e0e84691d9baf7",
"0xfe48eb0ee1d84385825e3d6a4a3bcb3f88c200dcc787f6c611d3654f2599c20f",
"0xed0d2e32030eb344a76f4b5dddb361bf24b3aff9d0e07e2111447e1c7d0b7ebc",
"0xfaeec8e95ece3997801e236dafab6d78ba114628f1376949262215d4b897ae83",
"0x7996677fbcfae2aa121199cdf61ad9b2f6029cf63ac538258fef1f32172579b0",
"0x774191257a04112c0686e6f43848b506f6c73a8b9653ebcb420f930d5b370e9e",
"0x4c2775c5c12097b3c021a9093d72080ff0a5edf8ba0ccecef912b0bfc08cf797",
"0x8f723391b27120ed0ef6fa59977f3ed222e1197a33b55d552215a6f24b54d55d",
"0x62ccd75d5b6469cf82f9771a49d462f8c1e8fa89e1d05d2e75b83e6b227bb9c7",
"0xcdf83bf0a97906cbcecf9c116fa1d068c1a6821957d900e9dcb219d125ba60b2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


