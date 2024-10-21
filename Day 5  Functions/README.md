# Functions

## Function Declarations:
- **Definition**: A function declaration is defined using the `function` keyword, followed by the function name. It can be called before its definition due to hoisting.
- **Example**:
    ```javascript
    function sum(a, b) {
      return a + b;
    }
    console.log(sum(5, 3)); // 8
    ```

## Function Expressions:
- **Definition**: A function expression is when a function is assigned to a variable. It cannot be called before it is defined because it is not hoisted.
- **Example**:
    ```javascript
    const multiply = function(a, b) {
      return a * b;
    };
    console.log(multiply(4, 5)); // 20
    ```

## Arrow Functions:
- **Definition**: Arrow functions, introduced in ES6, provide a shorter syntax for writing functions and do not bind their own `this` value.
- **Example**:
    ```javascript
    const subtract = (a, b) => a - b;
    console.log(subtract(10, 4)); // 6
    ```

---

### 2. Write one example of each type of function and log the results.

```javascript
// Function Declaration Example
function add(a, b) {
  return a + b;
}
console.log(add(3, 7)); // 10

// Function Expression Example
const divide = function(a, b) {
  return a / b;
};
console.log(divide(9, 3)); // 3

// Arrow Function Example
const multiply = (a, b) => a * b;
console.log(multiply(5, 5)); // 25
