var compose = function (otherClass) {
  var args = [].slice.call(arguments, 1)
    , base = otherClass.apply(otherClass, args)

  return function Composition (inst) {
    Object.keys(base).forEach(function (prop) {
      inst[prop] = base[prop]
    })
  }
}

var Compose = function (classyClass) {
  classyClass.compose = function () {
    return classyClass.use(compose.apply(compose, arguments))
  }
}

module.exports = Compose
