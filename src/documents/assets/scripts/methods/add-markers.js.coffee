SPEC.methods.addCRMMarkers = ->
  
  markers=
    emailGate:
      pin: @Leaflet.marker([-269.5, 332.1875]).addTo(@map)
      txt: """
        <p><b>Email Gate</b><br><a href="http://google.com/">google</a></p> """
    museLogin:
      pin: @Leaflet.marker([-152.875, 444.125]).addTo(@map)
      txt: """
        <p><b>Muse Login</b></p> """
    museSignup:
      pin: @Leaflet.marker([-214.5625, 444.125]).addTo(@map)
      txt: """
        <p><b>Muse Signup</b></p> """
    assistance:
      pin: @Leaflet.marker([-77.1875, 499.75]).addTo(@map)
      txt: """
        <p><b>Ask for Assistance</b></p> """

  markers.emailGate.pin.bindPopup(markers.emailGate.txt)
  markers.museLogin.pin.bindPopup(markers.museLogin.txt)
  markers.museSignup.pin.bindPopup(markers.museSignup.txt)
  markers.assistance.pin.bindPopup(markers.assistance.txt)
