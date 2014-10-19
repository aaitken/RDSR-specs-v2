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

marker = L.marker([-269.5, 332.1875]).addTo(map)
L.marker([-152.875, 444.125]).addTo(map)
L.marker([-214.5625, 444.125]).addTo(map)
L.marker([-77.1875, 499.75]).addTo(map)


marker.bindPopup('<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>').openPop


L.control.layers().addTo(map)

map.on 'click', (e)->
  console.log("#{e.latlng.lat}, #{e.latlng.lng}")

