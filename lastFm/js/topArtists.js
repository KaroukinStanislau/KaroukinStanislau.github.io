function TopArtists() {
  this.method = "chart.gettopartists";
  Loader.apply(this, arguments);
}

TopArtists.prototype = Object.create(Loader.prototype);
TopArtists.prototype.constructor = TopArtists;

TopArtists.prototype.getInfo = function(artistName) {
  var queryObject = {
    method: this.method
  };
  this.doGet(queryObject, this._display);
};

TopArtists.prototype._display = function() {
  console.log("Top artists");
  console.log(JSON.parse(this.responseText));
}
