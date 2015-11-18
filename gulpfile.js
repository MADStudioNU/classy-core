var gulp     = require('gulp')
  , bifywify = require('bify-wify')

function Run () {
  var args = [].slice.call(arguments, 1)
    , action = arguments[0]
  return function () {
    return action.apply(null, args)
  }
}

gulp.task('bundle:standalone', Run (
  bifywify.fbify, 'bootstrapper.js', 'classy-core.bundle.js', { standalone: 'ClassyCore' }
))
