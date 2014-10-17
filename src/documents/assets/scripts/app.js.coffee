#http://leafletjs.com/examples/quick-start.html
L.Icon.Default.imagePath = '/assets/images/leaflet'

map = L.map('ama-map', {
  minZoom: 1
  maxZoom: 5
  attributionControl: false
  center: [0, 0]
  zoom: 1
  crs: L.CRS.Simple})

#dimensions of the image
w = 10000
h = 5000
url = '/assets/images/RDSR-MWA.png'

#calculate the edges of the image, in coordinate space
southWest = map.unproject([0, h], map.getMaxZoom()-1)
northEast = map.unproject([w, 0], map.getMaxZoom()-1)
bounds = new L.LatLngBounds(southWest, northEast)

#add the image overlay
#so that it covers the entire map
L.imageOverlay(url, bounds).addTo(map)

#tell leaflet that the map is exactly as big as the image
map.setMaxBounds(bounds)

L.marker([-269.5, 332.1875]).addTo(map)
L.marker([-152.875, 444.125]).addTo(map)
L.marker([-214.5625, 444.125]).addTo(map)

map.on 'click', (e)->
  console.log("#{e.latlng.lat}, #{e.latlng.lng}")

