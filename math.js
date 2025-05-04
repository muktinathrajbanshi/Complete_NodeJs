const add = (a, b) => {
    return a + b;
};

const sub = (a, b) => {
    return a - b;
};

const div = (a, b) => {
    return a / b;
};


const mul = (a, b) => {
    return a * b;
};

const PI = 3.214;

// module.exports.add = add;
// module.exports.mul = mul;

module.exports = { add, mul, sub, div, PI };

// module.exports is a single object or value.
// When you reassign module.exports (e.g., module.exports = add), it completely replaces whatever was previously
// assigned.
// If you reassign it again (module.exports = mul), the previous value (add) is replaced with mul.