function ArtistSearch() {
  this.method = "artist.search";
  Loader.apply(this, arguments);
}

ArtistSearch.prototype = Object.create(Loader.prototype);
ArtistSearch.prototype.constructor = ArtistSearch;

ArtistSearch.prototype.getInfo = function(artistName, cb) {
  var queryObject = {
    method: this.method,
    artist: artistName
  };
  this.doGet(queryObject, cb);
}
