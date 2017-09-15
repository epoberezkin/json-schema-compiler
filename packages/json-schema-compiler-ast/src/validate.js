'use strict';

const b = require('ast-types').builders;
const keywords = require('./keywords');


module.exports = function validateAst(schema) {
  return [
    b.returnStatement(
      b.literal(true)
    )
  ];
};
