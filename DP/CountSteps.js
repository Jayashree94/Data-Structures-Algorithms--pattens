/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    if (n <= 1) return 1;

    let a = 1; // ways to climb 0 steps
    let b = 1; // ways to climb 1 step

    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

// Example usage:
console.log(climbStairs(3)); // Output: 3
console.log(climbStairs(5)); // Output: 8
