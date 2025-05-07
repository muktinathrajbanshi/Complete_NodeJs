// const add = require("./math");

// const { add, mul, sub, div, PI } = require("./math");

// console.log(add(5, 10));
// console.log(mul(5, 10));
// console.log(sub(5, 10));
// console.log(div(5, 10));
// console.log(PI);

// const mul = require("./math");
// const math = require("./math");
// import multiply from "./math.js";
import { add, sub, mult, div, PI} from "./math.js";
import * as math from "./math.js";


console.log(math.add(5, 10));
console.log(mult(70, 10));
console.log(math.sub(5, 10));
console.log(div(50, 10));
console.log(math.PI);





// console.log("Hello, World!");


// const arr = [1, 2, 3, 4, 5];
// console.log(arr.map((num) => num * 5));



// Semantic Versioning System
// 1.0.0
// 1. Major Version (Breaking change, e.g. a rebrand, feature set added)
// 0. Minor Version (Non-breaking noteworthy change, e.g. new component, updated styles)
// 0. Patch Version (Small request or bug fix, e.g. update or edit existing elements)


// npm install <package-name> @ <version>
// examples:
// npm install express@4.0.0 // ^4.0.0
// npm install express@4.0.0 --save-exact // To install exact vesion.
// npm install express@~4.0.0
// npm install express@4.2.x
// You can use any symbols while specifying version.

// npm outdated
// It shows outdated packages in your project.
// Current: The version of the package currently installed in your project.
// Wanted: The latest version that specifies the version range defined in your package.json. It basically uses the symbols to get it.
// Latest: Absolute latest version of the package.

// npm update

// npm remove <package-name>


// npx npm-check-updates 
// npx is a CLI tool that comes with npm.
// It is used to execute a package without requiring you to install globally or locally.
// It is useful for temporary usage of a package.
// npm-check-updates is a package which you can use to upgrade your packages to absolute latest versions.
// Use -u flag at the end to update the packages after reviewing.
// This only updates package.json, then you can use npm install to update the packages.

