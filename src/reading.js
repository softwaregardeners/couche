const { readFileSync } = require('fs');

function fetch(name) {
  if (Object.prototype.hasOwnProperty.call(process.env, name)) {
    return process.env[name];
  }

  const variableName = `${name}_FILE`;
  if (Object.prototype.hasOwnProperty.call(process.env, variableName)) {
    try {
      return `${readFileSync(process.env[variableName])}`.trimRight();
    } catch (err) {
      return undefined;
    }
  }

  return undefined;
}

module.exports = names => names.map(fetch);
