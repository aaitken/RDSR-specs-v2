SPEC.methods.makeCrmLayerGroup = ->
  
  markers = [
    @Leaflet.marker([-269.5, 332.1875]).bindPopup("""
      <p><b>Email Gate</b><br><a href="http://google.com/">google</a></p> """)
    @Leaflet.marker([-152.875, 444.125]).bindPopup("""
      <p><b>Muse Login</b></p> """)
    @Leaflet.marker([-214.5625, 444.125]).bindPopup("""
      <p><b>Muse Signup</b></p> """)
    #@Leaflet.marker([-77.1875, 499.75]).bindPopup("""
      #<p><b>Ask for Assistance</b></p> """)
    ]

  @crmEntryPoints = @Leaflet.layerGroup(markers)
