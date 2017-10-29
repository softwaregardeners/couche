const transform = name => (name.endsWith('!')
  ? [name.slice(0, -1), true]
  : [name, false]);

module.exports = transform;
