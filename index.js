// basic math functions
var a = 5
var b = 9
    // 1) 'add()' is a valid function
    // 5) add(a, b) adds two numbers and returns the result
    function add(a, b) {
        return (a+b);
    }
    // 2) 'subtract()' is a valid function
    // 6) subtract(a, b) subtracts b from a and returns the result
    function subtract(a, b) {
        return (a-b);
    }
    // 3) 'multiply()' is a valid function
    // 7) multiply(a, b) multiplies two numbers and returns the result
    function multiply(a, b) {
        return (a*b);
    }
    // 4) 'divide()' is a valid function
    // 8) divide(a, b) divides a by b and returns the result
    function divide(a, b) {
        return (a/b)
    }
    // 9) increment(n) increments n and returns the result
var n = 25;
    function increment(n) {
        return (n+=1);
    }
    // 10) decrement(n) decrements n and returns the result
    function decrement(n) {
        return (n-=1);
    }

// makeInt(n)
    // 11) parses n as an integer and returns the parsed integer
    // 12) assumes base 10
    // 13) returns NaN as appropriate
    function makeInt(n) {
        return parseInt(n, 10);
    }

// preserveDecimal(n)
    // 14) preserves n's decimals (it parses n as a floating point number) and returns the parsed number
    // 15) returns NaN as appropriate
    function preserveDecimal(n) {
        return parseFloat(n)
    }