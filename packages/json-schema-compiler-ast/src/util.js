'use strict';

module.exports = {
  copy: copy,
  toHash: toHash
};

function copy(o, to) {
  to = to || {};
  for (var key in o) to[key] = o[key];
  return to;
}

function toHash(arr) {
  var hash = {};
  for (var i=0; i<arr.length; i++) hash[arr[i]] = true;
  return hash;
}
