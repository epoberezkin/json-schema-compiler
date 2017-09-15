'use strict';

const compile = require('../src/index');
const {generate} = require('astring');
const assert = require('assert');

describe('compile', () => {
  it('should compile schemas to AST', () => {
    const schemas = [
      { $id: 'int.json', type: 'integer' },
      { $id: 'str.json', type: 'string' }
    ];

    const ast = compile(schemas);
    const code = generate(ast, {indent:'  '});
    assert.equal(code,
`module.exports = {
  "int.json": validate0,
  "str.json": validate1
};
function validate0(data) {
  return true;
}
function validate1(data) {
  return true;
}
`);
  });
});
