const findBestEmployee = function (employees) {
  let arr = Object.entries(employees),
    maxValue = Math.max(...Object.values(employees));
  for (let key of arr) {
    if (key[1] === maxValue) return key[0];
  }
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence
console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango
console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
