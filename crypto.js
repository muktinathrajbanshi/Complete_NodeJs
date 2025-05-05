const crypto = require("crypto");

const randomValue = crypto.randomBytes(8).toString("hex");

console.log(randomValue);

const hashValue = crypto.createHash("sha256").update("muktinath rajbanshi").digest("hex");
console.log(hashValue);

// const hashValue1 = crypto.createHash("sha256").update("muktinath rajbanshi").digest("hex");
// console.log(hashValue1);

//* 192ff5a89ff433098a46aabc43d1353f0f4af0f8316af8af556fdb9483114c3f