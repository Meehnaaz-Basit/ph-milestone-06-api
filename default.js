function add(num1, num2) {
  const result = num1 + num2;
  console.log(num1, num2, result);
  return result;
}
add(5, 2); // 5 2 7
add(5); // 5 undefined NaN
add(); // undefined undefined NaN

/////// so if we don't give any argument then the parameter return undefined and the total result return NaN /////
