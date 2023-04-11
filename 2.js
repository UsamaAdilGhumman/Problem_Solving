// Check unique number of occurrences in an array.
//   In an array ['a', 'b', 'b', 'c', 'C'], return:
//   { a: 1, b: 2, c: 2}

const createArr = (a) => {
  const letters = new Set(a);
  let letter = [...letters];
  const obj = {};

  letter.forEach((item) => {
    obj[item] = 0;
  });

  letter.forEach((item) => {
    a.forEach((ele) => {
      if (ele === item) {
        obj[item]++;
      }
    });
  });

  console.log("obj", obj);
  return obj;
};

createArr(["a", "b", "b", "c", "C"]);
