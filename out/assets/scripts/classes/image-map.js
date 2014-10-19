(function() {
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
