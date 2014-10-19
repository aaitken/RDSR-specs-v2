SPEC.utils.include(SPEC.ImageMap, SPEC.methods)


imageMap = new SPEC.ImageMap({
  el: 'ama-map'
  img:
    src: '/assets/images/RDSR-MWA.png'
    w: 10000
    h: 5000
  zoom:
    min: 1
    max: 5
})

imageMap.addCRMMarkers()
imageMap.addLayersControl()
imageMap.enableLatlngLogging()

