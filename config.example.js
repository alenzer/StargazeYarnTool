/*
 * This is the main config for your NFT sale.
 *
 * Fill this out with all your project details.
 */

module.exports = {
  //// ACCOUNT INFO ////
  // The account seed phrase to use for deployment
  mnemonic:
    '',
  // Your STARS address
  account: '',

  //// API CONFIG ////
  // The RPC endpoint for Stargaze, Elgafar Testnet
  rpcEndpoint: 'https://rpc.elgafar-1.stargaze-apis.com/',
  // The RPC endpoint for Stargaze, mainnet
  // rpcEndpoint: 'https://rpc.stargaze-apis.com/',
  // NFT.storage endpoint
  nftStorageEndpoint: 'https://api.nft.storage',
  // NFT.storage API key
  nftStorageApiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEVBN2JDMDZEMzE0RUE2NDdlMGE3OTQ2OUE2YzUwZmFiODhENzdCNDUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0NDIwMzYyNTc4MiwibmFtZSI6IlNBTU5GVCJ9.otzi5G8BCGhtZKC3gKxkBujM9fA4iuHayc8Q4_3dHME',
  // Pinata API Key (optional)
  pinataApiKey: '10d510f11abd60be49a7',
  // Pinata Secret Key (optional)
  pinataSecretKey: '9990913d36fb68a2b840f7a2964eb210420e5968008338dacef633f2f2851a1b',

  //// COLLECTION INFO ////
  // The name of your collection
  name: 'AquaNauts',
  // The 3-7 letter ticker symbol for your collection
  symbol: 'AQUA',
  // Project description
  description: 'NFTs packed with value and utility that make a real difference in the world',
  // Link to image to use as the main image for the collection.
  // Either IPFS or valid http links allowed. Gif compatible.
  // (at least 500 x 500 pixels)
  image:
    'https://bafybeigclyfgaysx73ch43hvqfdx6jt26saocpf4gggd3dyblh3pixtlda.ipfs.nftstorage.link/',
  // External_link is optional. Gif compatible
  //   external_link:
  // 'https://c.tenor.com/o656qFKDzeUAAAAC/rick-astley-never-gonna-give-you-up.gif',
  // The address for royalites to go to (may be the same as `account`)
  // Comment out both below if not using royalites
  royaltyPaymentAddress: 'stars1uyjwsywch5h6x9pwrakj46y6fcr3a9w66mkn90',
  // Royalty share: 1 = 100%, 0.1 = 10%
  royaltyShare: '0.1',

  //// WHITELIST CONTRACT (OPTIONAL) ////
  // A list of whitelisted addresses that will be able to purchase the sale early
  // Comment out if not using a whilelist
  whitelist: ['stars12v06zrrhw0vs83t83svsddgl4ndfmk9cny2wu3'],
  // The date when the whitelist only purchasing period ends and everyone can buy (in ISO format)
  whitelistStartTime: '2022-11-28T18:00:00.000Z',
  whitelistEndTime:   '2022-11-29T06:00:00.000Z',
  // The price (in STARS) for the whitelist (minimum 25 STARS)
  whitelistPrice: 4300,
  // The Per Address Limit during whitelist period this can be different than the main public limit
  whitelistPerAddressLimit: 5,
  // The number of members in the whitelist (max 5000, each 1000 is 100 STARS)
  whitelistMemberLimit: 300,
  // The contract address for your whitelist contract
  // Get this after running `yarn whitelist`
  whitelistContract: 'stars1u04rcxlfsupvuc78mzk5cfql0upjjqa3l8vmwwsnymusjklp2pns75x75e',

  //// MINTER CONTRACT ////
  // The base URI to be used to programatically mint tokens
  baseTokenUri: 'ipfs://bafybeiaq3soaeiele2zx3n2qomksia352pooa5wbk5scnczzvucaqbad7m/galaxy4phyYu',
  // The number of tokens to mint
  numTokens: 1000,
  // The price (in STARS) for your NFTs (minimum 50 STARS)
  unitPrice: 5400,
  // The max amount of NFTs an address can mint
  perAddressLimit: 20,
  // The date when the sale goes live
  // If whitelist is enabled, only whitelisted addresses will be able to purchase
  // startTime in ISO format
  startTime: '2022-11-29T06:00:00.000Z',
  // The minter contract address
  // Get this after running `yarn minter`
  minter: 'stars1l239gw70d03n656w0rere5wuqjgq5xkmserggz7x0kyyy6rya8sq6gvxm3',
  // SG721 contract address
  // Get this after running `yarn minter`
  sg721: 'stars1f9qfmt7zwlcf3yqjp55h39fgqh64s5m5cwt0a5s9gnt84u3j3vwqflhdlj',

  //// CONTRACT CODE IDs: Double Double Testnet ////
  // The code ID for sg721
  sg721CodeId: 1,
  // The code ID for the minter contract
  minterCodeId: 569,
  // The code ID for the whitelist contract
  whitelistCodeId: 3,
  marketplace:
    'stars18cszlvm6pze0x9sz32qnjq4vtd45xehqs8dq7cwy8yhq35wfnn3qgzs5gu',

  // //// CONTRACT CODE IDs: Mainnet ////
  // // The code ID for sg721
  // sg721CodeId: 1,
  // // The code ID for the minter contract
  // minterCodeId: 2,
  // // The code ID for the whitelist contract
  // whitelistCodeId: 3,
  //   marketplace:
  //       'stars1fvhcnyddukcqfnt7nlwv3thm5we22lyxyxylr9h77cvgkcn43xfsvgv0pl',
};
