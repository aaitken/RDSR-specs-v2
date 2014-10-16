#http://leafletjs.com/examples/quick-start.html
map = L.map('ama-map').setView([51.505, -0.09], 13)
L.tileLayer('https://a.tiles.mapbox.com/v4/8ken.jpg91pdd/page.html?access_token=pk.eyJ1IjoiOGtlbiIsImEiOiJvZ0lMWU9NIn0.AWbPDeAb1PbKgtoBzk-_Vg#4/39.91/-105.01', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map)
