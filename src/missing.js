const { isUndefined } = require('./utils');

module.exports = ([_, mandatory, value]) => // eslint-disable-line no-unused-vars
  mandatory && isUndefined(value);
