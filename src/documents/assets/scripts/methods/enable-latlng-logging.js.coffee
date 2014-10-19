SPEC.methods.enableLatlngLogging = ->

  @map.on 'click', (e)->
    console.log("#{e.latlng.lat}, #{e.latlng.lng}")
