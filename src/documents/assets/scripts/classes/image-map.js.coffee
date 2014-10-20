SPEC.ImageMap = class

  constructor: (options)->
    @el = options.el
    @img = options.img
    @zoom = options.zoom
    @Leaflet = L
    @imagePath = '/assets/images/leaflet'
    @_init()


  _setImagePath: ->
    @Leaflet.Icon.Default.imagePath = @imagePath

  
  _setupMap: ->
    @map = @Leaflet.map(@el, {
      minZoom: @zoom.min
      maxZoom: @zoom.max
      attributionControl: false
      center: [0, 0]
      zoom: 1
      layers: @crmEntryPoints
      crs: L.CRS.Simple})


  _overlayImage: ->

    #calculate the edges of the image, in coordinate space
    southWest = @map.unproject([0, @img.h], @map.getMaxZoom()-1)
    northEast = @map.unproject([@img.w, 0], @map.getMaxZoom()-1)
    bounds = new L.LatLngBounds(southWest, northEast)
    
    #add the image overlay so that it covers the entire map
    @Leaflet.imageOverlay(@img.src, bounds).addTo(@map)

    #tell leaflet that the map is exactly as big as the image
    @map.setMaxBounds(bounds)


  _init: ->
    @makeCrmLayerGroup()
    @_setImagePath()
    @_setupMap()
    @_overlayImage()


#modularized methods
SPEC.utils.include(SPEC.ImageMap, SPEC.methods)



