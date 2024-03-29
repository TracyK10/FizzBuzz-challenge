// TODO: Print/log numbers from 1 to 100. For multiples of 3, print "fizz" and for multiples of 5 print "Buzz". for numbers which are multiples of both 3 and 5 print "FizzBuzz"

function FizzBuzz(n) {
    let num = []
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 !== 0) {
        num.push("Fizz")
      } else if (i % 3 !== 0 && i % 5 === 0) {
        num.push("Buzz");
      } else if (i % 3 === 0 && i % 5 === 0) {
        num.push("FizzBuzz");
      } else {
        num.push(i)
      }
    }
    return num;
  }
  console.log(FizzBuzz(100));