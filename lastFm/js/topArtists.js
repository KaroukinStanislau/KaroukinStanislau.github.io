function TopArtists() {
  this.method = "chart.gettopartists";
  Loader.apply(this, arguments);
}

TopArtists.prototype = Object.create(Loader.prototype);
TopArtists.prototype.constructor = TopArtists;

TopArtists.prototype.getInfo = function(cb, page) {
  var queryObject = {
    method: this.method,
    limit: 6 * 5,
    page: page
  };
  this.doGet(queryObject, cb);
}
