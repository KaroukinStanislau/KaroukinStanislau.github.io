function ArtistTopAlbums() {
  this.method = "artist.getTopAlbums";
  Loader.apply(this, arguments);
}

ArtistTopAlbums.prototype = Object.create(Loader.prototype);
ArtistTopAlbums.prototype.constructor = ArtistTopAlbums;

ArtistTopAlbums.prototype.getInfo = function(artistName, cb) {
  var queryObject = {
    method: this.method,
    artist: artistName,
    limit: 12
  };
  this.doGet(queryObject, cb);
};
