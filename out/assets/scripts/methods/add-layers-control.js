(function() {
  SPEC.methods.addLayersControl = function() {
    var overlayCrm;
    overlayCrm = {
      "CRM Entry Points": this.crmEntryPoints
    };
    return this.Leaflet.control.layers(null, overlayCrm).addTo(this.map);
  };

}).call(this);
