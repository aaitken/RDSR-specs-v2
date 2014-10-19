(function() {
  SPEC.methods.enableLatlngLogging = function() {
    return this.map.on('click', function(e) {
      return console.log("" + e.latlng.lat + ", " + e.latlng.lng);
    });
  };

}).call(this);
