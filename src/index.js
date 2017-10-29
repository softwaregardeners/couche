const fetchValues = require('./reading');
const missing = require('./missing');
const transform = require('./transform-names');
const {
  isUndefined,
  tupplesToObject,
} = require('./utils');
const zip = require('./zip');


function doCouche(variables) {
  const variableNames = Object.keys(variables);
  const readings = fetchValues(variableNames);
  zip(variableNames, readings)
    // eslint-disable-next-line no-unused-vars
    .filter(([name, value]) => !isUndefined(value))
    // eslint-disable-next-line no-return-assign
    .forEach(([name, value]) => process.env[name] = value);
  const missingVariables = zip(variableNames, Object.values(variables), readings)
    .filter(missing)
    .map(([name]) => name);
  if (missingVariables.length) {
    throw new Error(`the following variables are required: ${missingVariables.join(', ')}`);
  }
}

module.exports = variableNames =>
  doCouche(tupplesToObject(variableNames.map(transform)));
