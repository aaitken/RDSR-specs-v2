SPEC.methods.addLayersControl = ->

  overlayCrm = {
    "CRM Entry Points": @crmEntryPoints}

  @Leaflet.control.layers(null, overlayCrm).addTo(@map)
