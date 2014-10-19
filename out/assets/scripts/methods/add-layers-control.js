(function() {
  SPEC.methods.addLayersControl = function() {
    return this.Leaflet.control.layers().addTo(this.map);
  };

}).call(this);
