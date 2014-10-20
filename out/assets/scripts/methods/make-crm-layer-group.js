(function() {
  SPEC.methods.makeCrmLayerGroup = function() {
    var markers;
    markers = [this.Leaflet.marker([-269.5, 332.1875]).bindPopup("<p><b>Email Gate</b><br><a href=\"http://google.com/\">google</a></p> "), this.Leaflet.marker([-152.875, 444.125]).bindPopup("<p><b>Muse Login</b></p> "), this.Leaflet.marker([-214.5625, 444.125]).bindPopup("<p><b>Muse Signup</b></p> ")];
    return this.crmEntryPoints = this.Leaflet.layerGroup(markers);
  };

}).call(this);
