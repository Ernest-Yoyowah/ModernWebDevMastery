// High order functions

// type User = {
//   username: string;
//   isLoggedIn: boolean;
// };

// // Example secured function
// const accessDashboard = (user: User) => {
//   console.log(`Welcome, ${user.username}! You have accessed the dashboard.`);
// };

// // Higher-Order Function for authentication
// const withAuth = (func: (user: User) => void) => {
//   return (user: User) => {
//     if (user.isLoggedIn) {
//       func(user); // Call the original function if logged in
//     } else {
//       console.log("Access denied. Please log in first.");
//     }
//   };
// };

// // Wrap the `accessDashboard` function with `withAuth`
// const securedDashboard = withAuth(accessDashboard);

// // Example usage
// const user1: User = { username: "Ernest", isLoggedIn: true };
// const user2: User = { username: "Guest", isLoggedIn: false };

// securedDashboard(user1); // Output: Welcome, Ernest! You have accessed the dashboard.
// securedDashboard(user2); // Output: Access denied. Please log in first.

// composition

// Function to add 5 marks
const funcAdd = (x: number): number => {
  return x + 5;
};

// Function to multiply by 10
const funcMultiply = (n: number): number => {
  return n * 10;
};

// Function to compose two functions (i.e., apply funcAdd to the result of funcMultiply)
const compose =
  <T>(f: (x: T) => T, g: (x: T) => T) =>
  (x: T) =>
    f(g(x));

// Using composition
const finalScore = compose(funcAdd, funcMultiply)(5); // First multiply, then add 5
// console.log(finalScore); // 55 (5 * 10 + 5)

// fibonacci sequence
const fibSeq = (n: number): number[] => {
  let fib: number[] = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
};

console.log(fibSeq(8));
