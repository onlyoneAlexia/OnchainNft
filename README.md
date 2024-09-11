# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```

Certainly! I'll explain the code you've written in the `onChainNft.sol` file:

1. Contract Declaration:
```solidity
contract OnChainNFT is ERC721URIStorage, Ownable {
```
This declares a new contract named `OnChainNFT` that inherits from `ERC721URIStorage` (an OpenZeppelin implementation of ERC721 with URI storage) and `Ownable` (for access control).

2. Event Declaration:
```solidity
event Minted(uint256 tokenId);
```
This declares an event that will be emitted when a new token is minted, including the token ID.

3. State Variable:
```solidity
uint256 private _tokenIds;
```
This is a private variable to keep track of the number of tokens minted.

4. Constructor:
```solidity
constructor() ERC721("OnChainNFT", "ONC") Ownable(msg.sender) {}
```
This initializes the contract, setting the name to "OnChainNFT" and the symbol to "ONC". It also sets the contract deployer as the owner.

5. SVG to Image URI Conversion:
```solidity
function svgToImageURI(string memory svg) public pure returns (string memory)
```
This function converts an SVG string to a base64-encoded image URI.

6. Token URI Formatting:
```solidity
function formatTokenURI(string memory imageURI) public pure returns (string memory)
```
This function creates a base64-encoded JSON string containing metadata for the NFT, including the image URI.

7. Minting Function:
```solidity
function mint(string memory svg) public onlyOwner
```
This function allows the contract owner to mint a new NFT. It:
- Converts the provided SVG to an image URI
- Formats the token URI with metadata
- Increments the token ID
- Mints the new token to the owner's address
- Sets the token URI
- Emits a `Minted` event

The contract uses OpenZeppelin's implementations for ERC721 functionality and ownership, and includes a custom Base64 encoding library for on-chain SVG storage.

This contract allows for the creation of on-chain NFTs where the image data (in SVG format) is stored directly on the blockchain, rather than referencing an external URI.