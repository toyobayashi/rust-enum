'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/rust-enum.cjs.min.js')
} else {
  module.exports = require('./dist/rust-enum.cjs.js')
}
