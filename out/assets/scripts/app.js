(function() {
  window.SPEC = {};

  window.SPEC.methods = {};

  window.SPEC.utils = {};

}).call(this);
;(function() {
  SPEC.methods.addLayersControl = function() {
    return this.Leaflet.control.layers().addTo(this.map);
  };

}).call(this);
;(function() {
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
;(function() {
  SPEC.methods.enableLatlngLogging = function() {
    return this.map.on('click', function(e) {
      return console.log("" + e.latlng.lat + ", " + e.latlng.lng);
    });
  };

}).call(this);
;(function() {
  SPEC.utils.extend = function(obj, mixin) {
    var method, name;
    for (name in mixin) {
      method = mixin[name];
      obj[name] = method;
    }
    return obj;
  };

}).call(this);
;(function() {
  SPEC.utils.include = function(klass, mixin) {
    return SPEC.utils.extend(klass.prototype, mixin);
  };

}).call(this);
;(function() {
  SPEC.ImageMap = (function() {
    function _Class(options) {
      this.el = options.el;
      this.img = options.img;
      this.zoom = options.zoom;
      this.Leaflet = L;
      this.imagePath = '/assets/images/leaflet';
      this._init();
    }

    _Class.prototype._setImagePath = function() {
      return this.Leaflet.Icon.Default.imagePath = this.imagePath;
    };

    _Class.prototype._setupMap = function() {
      return this.map = this.Leaflet.map(this.el, {
        minZoom: this.zoom.min,
        maxZoom: this.zoom.max,
        attributionControl: false,
        center: [0, 0],
        zoom: 1,
        crs: L.CRS.Simple
      });
    };

    _Class.prototype._overlayImage = function() {
      var bounds, northEast, southWest;
      southWest = this.map.unproject([0, this.img.h], this.map.getMaxZoom() - 1);
      northEast = this.map.unproject([this.img.w, 0], this.map.getMaxZoom() - 1);
      bounds = new L.LatLngBounds(southWest, northEast);
      this.Leaflet.imageOverlay(this.img.src, bounds).addTo(this.map);
      return this.map.setMaxBounds(bounds);
    };

    _Class.prototype._init = function() {
      this._setImagePath();
      this._setupMap();
      return this._overlayImage();
    };

    return _Class;

  })();

  SPEC.utils.include(SPEC.ImageMap, SPEC.methods);

}).call(this);
;(function() {
  var imageMap;

  SPEC.utils.include(SPEC.ImageMap, SPEC.methods);

  imageMap = new SPEC.ImageMap({
    el: 'ama-map',
    img: {
      src: '/assets/images/RDSR-MWA.png',
      w: 10000,
      h: 5000
    },
    zoom: {
      min: 1,
      max: 5
    }
  });

  imageMap.addCRMMarkers();

  imageMap.addLayersControl();

  imageMap.enableLatlngLogging();

}).call(this);
