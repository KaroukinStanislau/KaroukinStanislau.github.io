function ArtistInfo() {
  this.method = "artist.getinfo";
  Loader.apply(this, arguments);
}

ArtistInfo.prototype = Object.create(Loader.prototype);
ArtistInfo.prototype.constructor = ArtistInfo;

ArtistInfo.prototype.getInfo = function(artistName) {
  var queryObject = {
    method: this.method,
    artist: artistName
  };
  this.doGet(queryObject, this._display);
};

ArtistInfo.prototype._display = function() {
  console.log("Artist info");
  console.log(JSON.parse(this.responseText));
}
