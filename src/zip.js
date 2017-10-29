const getValueFromArray = arr => index =>
  ((index < arr.length) ? arr[index] : undefined);

function zip(one, ...rest) {
  const getters = rest.map(getValueFromArray);
  return one.map((value, index) => [value].concat(getters.map(g => g(index))));
}

module.exports = zip;
