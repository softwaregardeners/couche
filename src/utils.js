const isUndefined = value => typeof value === 'undefined';

const tupplesToObject = tupples =>
  Object.assign({}, ...tupples.map(([name, value]) => ({ [name]: value })));


module.exports = {
  isUndefined,
  tupplesToObject,
};
