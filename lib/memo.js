var memo = function (action) {
  var args = [].slice.call(arguments, 1)
    , value
  return function () {
    if (value) return value
    return (value = action.apply(action, args))
  }
}

module.exports = memo
