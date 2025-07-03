// Exporting a function named 'add' that takes two parameters 'a' and 'b'
export const add = (a, b) => {
    // Returns the sum of 'a' and 'b'
    return a + b;
}

// Exporting a function named 'diff' that takes two parameters 'a' and 'b'
export const diff = (a, b) => {
    // Returns the difference between 'a' and 'b' (a - b)
    return a - b;
}

// Exporting a function named 'dif' that takes two parameters 'a' and 'b'
export const dif = (a, b) => {
    // Checks if 'a' is greater than or equal to 'b'
    if (a >= b) {
        // If true, returns the absolute difference (a - b)
        return a - b;
    } else {
        // If false, returns the absolute difference (b - a)
        return b - a;   
    }
}

// Exporting a function named 'mult' that takes two parameters 'a' and 'b'
export const mult = (a, b) => {
    // Returns the product of 'a' and 'b'
    return a * b;
}
