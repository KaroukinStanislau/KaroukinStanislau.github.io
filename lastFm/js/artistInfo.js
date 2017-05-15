function ArtistInfo() {
  this.method = "artist.getinfo";
  Loader.apply(this, arguments);
}

ArtistInfo.prototype = Object.create(Loader.prototype);
ArtistInfo.prototype.constructor = ArtistInfo;

ArtistInfo.prototype.getInfo = function(artistName, cb) {
  var queryObject = {
    method: this.method,
    artist: artistName
  };
  this.doGet(queryObject, cb);
}
