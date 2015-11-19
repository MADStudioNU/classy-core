var toString = function (self) {
  var result = []
    , name
    , type
    , title

  for (var prop in self) {
    if (prop === 'name') {
      name = self[prop]
    } else if (prop === 'type') {
      type = self[prop]
    }
    result.push([ prop, self[prop] ])
  }

  if (name != null && type != null) {
    title = type + ' : ' + name
  } else {
    title = name != null
            ? name
            : type
  }

  return [
    title
    , '{'
    , result.map(function (p) { return p.join(' : ') }).join(', ')
    , '}'
  ].join(' ')
}

function ToString (obj) {
  obj.toString = function () {
    return toString.call(obj, obj)
  }
}

module.exports = ToString
