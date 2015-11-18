var NoDefault = require('./no-default')

var classComparator = function (comparisonFn) {
  return  function (expected, given) {
    return Object.keys(expected).every(function (prop) {
      return expected[prop] === NoDefault
          || comparisonFn(expected[prop], given[prop])
    })
  }
}

module.exports = classComparator
