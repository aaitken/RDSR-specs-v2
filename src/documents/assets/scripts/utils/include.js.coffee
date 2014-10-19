#http://arcturo.github.io/library/coffeescript/03_classes.html

SPEC.utils.include = (klass, mixin)->
  SPEC.utils.extend klass.prototype, mixin
