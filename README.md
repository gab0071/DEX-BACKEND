<h1 aling="center">CatellaTech DAO BACKEND 👷‍♂️⛓</h1>

  <a href="https://github.com/maurodesouza/profile-readme-generator/blob/master/LICENSE.md" target="_blank">
    <img alt="Badge showing project license type" src="https://img.shields.io/github/license/maurodesouza/profile-readme-generator?color=f85149">
  </a>

  <a href="#" target="_blank">
    <img src="https://img.shields.io/badge/Solidity-%5E8.0.4-363636?style=flat-square" alt="Badge showing the solidity version"/>
  </a>

  <a href="#" target="_blank">
    <img src="https://img.shields.io/badge/hardhat-2.8.4-f8fc03?style=flat-square" alt="Badge showing the hardhat version"/>
  </a>

  <a href="https://github.com/gab0071" target="_blank">
    <img alt="Author" src="https://img.shields.io/badge/made%20by-CatellaTech-blueviolet?style=flat-square">
  </a>
 

  <br>
  <br>

This smart contract is a decentralized exchange (DEX) that allows users to trade ERC20 tokens. The contract is inheriting from the ERC20 interface, which means it is using the functionality of an existing ERC20 contract to keep track of `Crypto Dev LP` tokens being used on the exchange.

The contract has a public address, `cryptoDevTokenAddress`, which stores the ERC20 contract address of `Crypto Dev LP` tokens. The contract also has a constructor that is used to initialize the ERC20 contract address and set the token name and token.

The contract has two main functions: `addLiquidity` and `getReserve`. The `addLiquidity` function allows users to add liquidity to the exchange, which means that they are providing ERC20 and Ether tokens in exchange for LP tokens (a token created by the exchange contract). The `getReserve` function returns the number of `Crypto Dev LP` tokens that the contract has in reserve.

In general, this smart contract works as a decentralized exchange that allows users to exchange ERC20 tokens in a decentralized way and without the need to trust a third party to carry out the transactions.

<h2> Requirements ⬇ </h2>

- Build an exchange with only one asset pair (Eth / Crypto Dev)
- Your Decentralized Exchange should take a fees of `1%` on swaps
- When user adds liquidity, they should be given `Crypto Dev LP` tokens (Liquidity Provider tokens)
- CD LP tokens should be given proportional to the `Ether` user is willing to add to the liquidity

You can see the smart contract on Etherscan: <a href="https://goerli.etherscan.io/address/0x6a1cf0350f4e7e63524e8c19c02f2cfe20ba1b52">Project</a>.

<hr>
<h2> Installing / Getting started </h2>

```bash
# Clone this project
$ git clone https://github.com/gab0071/DEX-BACKEND

# Access
$ cd DEX-BACKEND

# Install dependencies
$ npm install

``` 

<h2>Commands</h2>

- $ ` npx hardhat compile `
- $ ` npx hardhat run scripts/deploy.js --network goerli`

In the folder `constants/index.js`: 

```js
const CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS = "ADDRESS-OF-CRYPTO-DEV-TOKEN";

module.exports = { CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS };
```

<h2> Technologies / Built With </h2>

- Solidity
- Metamask
- <a href="https://www.npmjs.com/package/@openzeppelin/contracts"> OpenZeppelin </a>
- <a href="https://hardhat.org/">Hardhat Framework</a>
- <a href="https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-etherscan">Etherscan</a>

<h2>License</h2>

<p>This project is under license from MIT. For more details, see the LICENSE file.</p>

<h2>Contributing</h2>
Contributions are always welcome! Open a PR or an issue!

<br>
<br>

<p align="center">
<br/>
  Made with ❤️ by <b>catellaTech</b>.
<p/>
