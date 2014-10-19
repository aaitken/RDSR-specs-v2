(function() {
  SPEC.methods.addCRMMarkers = function() {
    var markers;
    markers = {
      emailGate: {
        pin: this.Leaflet.marker([-269.5, 332.1875]).addTo(this.map),
        txt: "<p><b>Email Gate</b><br><a href=\"http://google.com/\">google</a></p> "
      },
      museLogin: {
        pin: this.Leaflet.marker([-152.875, 444.125]).addTo(this.map),
        txt: "<p><b>Muse Login</b></p> "
      },
      museSignup: {
        pin: this.Leaflet.marker([-214.5625, 444.125]).addTo(this.map),
        txt: "<p><b>Muse Signup</b></p> "
      },
      assistance: {
        pin: this.Leaflet.marker([-77.1875, 499.75]).addTo(this.map),
        txt: "<p><b>Ask for Assistance</b></p> "
      }
    };
    markers.emailGate.pin.bindPopup(markers.emailGate.txt);
    markers.museLogin.pin.bindPopup(markers.museLogin.txt);
    markers.museSignup.pin.bindPopup(markers.museSignup.txt);
    return markers.assistance.pin.bindPopup(markers.assistance.txt);
  };

}).call(this);
