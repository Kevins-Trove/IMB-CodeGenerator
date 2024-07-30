//--------------------------------------------------------------------------- //  
// Name: BinaryStringFunctions.js
//  
// Purpose: Doing binary math using strings
// Author: Kevin Roper  
//  
// History: 10/08/2019 Created  
//--------------------------------------------------------------------------- 

// Global constants  
function addBinary(a, b) {
    while (b !== 0) {
        let carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }
    return a;
}

function subtractBinary(a, b) {
    // Calculate two's complement of b and add it to a
    while (b !== 0) {
        let borrow = (~a) & b;
        a = a ^ b;
        b = borrow << 1;
    }
    return a;
}

function multiplyBinary(a, b) {
    let result = 0;
    while (b !== 0) {
        if (b & 1) {
            result = addBinary(result, a);
        }
        a <<= 1;
        b >>= 1;
    }
    return result;
}

function divideBinary(dividend, divisor) {
    let quotient = 0;
    let remainder = 0;

    for (let i = 31; i >= 0; i--) {
        remainder <<= 1;
        remainder |= (dividend >> i) & 1;

        if (remainder >= divisor) {
            remainder -= divisor;
            quotient |= (1 << i);
        }
    }
    return { quotient, remainder };
}