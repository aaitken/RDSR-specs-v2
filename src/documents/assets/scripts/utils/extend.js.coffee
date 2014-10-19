#http://arcturo.github.io/library/coffeescript/03_classes.html

SPEC.utils.extend = (obj, mixin) ->
  obj[name] = method for name, method of mixin
  obj
