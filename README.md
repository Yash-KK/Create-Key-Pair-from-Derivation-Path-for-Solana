# Create Key-Pair from Derivation Path for Solana

## Overview

This script shows how to create multiple Solana key-pairs from a single BIP-39 mnemonic using specific derivation paths.

## Key Concepts

- **BIP-39 Mnemonic**: A 12-word phrase that generates the seed for key-pair creation.
- **Seed**: The root value derived from the mnemonic, used to generate key-pairs.
- **Derivation Path**: A path like `m/44'/501'/0'/0'` used to derive different keys from the seed.
- **Key-Pair**: Includes a public and private key, where the public key is used in the Solana network.

## Setup

### Prerequisites

Ensure you have Node.js and npm installed. If not, download and install them from [Node.js official site](https://nodejs.org/).

### Installation

1. Clone the repository or download the script.
2. Navigate to the project directory.
3. Install the required dependencies:

   ```bash
   npm init -y && npm i @solana/web3.js bip39 tweetnacl buffer ed25519-hd-key

## How to Run
1. Run the script using Node.js:

   ```bash
   node index.js
