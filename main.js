const SHA256 = require('crypto-js/sha256');

class block {
  constructor(index, timestamp, data, previousHash = '') {
    this.data = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }
  calculateHash() {
    return SHA256(
      this.index +
        this.previousHash +
        this.timestamp +
        JSON.stringify(this.data)
    ).toString();
  }
}

class Blockchain {
  constructor() {
    this.chain = [];
  }

  createGenesisBlock() {
    return new Blockchain(0, '01/01/2017', 'Genesis block', '0');
  }

  getLatestBlock(){
      return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
      newBlock.previousHash = this.getLatestBlock().hash;
      newBlock.hash = newBlock.calculateHash();
      this.chain.push(newBlock);
  }
}

let BaconBits = new Blockchain();
BaconBits.addBlock(new Block(1, "01/01/2017", {amount: 4}));
BaconBits.addBlock(new block(2, "01/02/2017", {amount: 10}));

console.log(JSON.stringify(BaconBits, null, 4));
