const formatString = function(string) {
    if(string.length >= 40) {
        const result = `${string.slice(0, 40)}...`;
        return result;
    }
    return string;
};

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
  );