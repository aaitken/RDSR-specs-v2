(function() {
  SPEC.utils.include = function(klass, mixin) {
    return SPEC.utils.extend(klass.prototype, mixin);
  };

}).call(this);
