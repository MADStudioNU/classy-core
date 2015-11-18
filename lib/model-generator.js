var memo      = require('./memo')
  , NoDefault = require('./no-default')

var _GenerateModel = function (classyClass) {
  var base = classyClass()
  Object.keys(base).forEach(function (prop) {
    if (base[prop] == null) {
      base[prop] = NoDefault
    }
  })
  return base
}

var ModelGenerator = function (classyClass) {
  return memo(_GenerateModel, classyClass)
}

module.exports = ModelGenerator
