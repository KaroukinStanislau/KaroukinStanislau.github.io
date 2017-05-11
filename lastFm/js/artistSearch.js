function ArtistSearch() {
  this.method = "artist.search";
  Loader.apply(this, arguments);
}

ArtistSearch.prototype = Object.create(Loader.prototype);
ArtistSearch.prototype.constructor = ArtistSearch;

ArtistSearch.prototype.getInfo = function(artistName) {
  var queryObject = {
    method: this.method,
    artist: artistName
  };
  this.doGet(queryObject, this._display);
};

ArtistSearch.prototype._display = function() {
  console.log("Artist search");
  console.log(JSON.parse(this.responseText));
}
