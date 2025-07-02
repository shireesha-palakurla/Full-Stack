// Power Calculation
// Using Math.pow() to calculate exponents
var result = Math.pow(2, 3);
console.log('Power of 2^3:', result);
// --------------------------------------------
//Random Number Generation
// Generating a random number between 1 and 6
var randomFloat = Math.random();    // Returns float between 0-1
var scaledValue = randomFloat * 6;   // Scale up to 0-6
var randomDieRoll = Math.floor(scaledValue) + 1;  // Convert to integer 1-6
console.log('Random die roll:', randomDieRoll);
