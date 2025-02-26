// Calculate the Fibonacci sequence up to a given number.

function fibonacci(n) {
  if (n <= 0) return [0];
  if (n === 1) return [0, 1];

  var prev = 0;
  var curr = 1;
  const fibs = [0, 1];

  for (var i = 2; i <= n; i++) {
    var next = prev + curr;
    prev = curr;
    curr = next;

    fibs.push(curr);
  }

  return fibs;
}

console.log("Fibonacci sequence up to :");
console.log("Arguments: ", process.argv.slice(2));
var n = parseInt(process.argv[2]);
console.log("Fibonacci sequence up to " + n + ":");
console.log(fibonacci(n));
