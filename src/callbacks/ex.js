sum = (a, b) => {
    console.log(`suma es ${a+b}`);
  return a + b;
}

calc = (a, b, callback) => {
    callback(a,b);
}

calc(5,6, sum)
