const findBestEmployee = function(employees) {
    // const arr = Object.entries(employees);
    // let max = Math.max(...Object.values(employees));
    // for(item of arr) {
    //     if(item[1] === max) {
    //         return `${item[0]}: ${item[1]}`
    //     }
    // }
    const values = Object.values(employees);
    const keys = Object.keys(employees);
    const max = Math.max(...values);
    const index = values.indexOf(max);

    return `${keys[index]}: ${values[index]}`;
};

  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux