function AlbumInfo() {
  this.method = "album.getinfo";
  Loader.apply(this, arguments);
}

AlbumInfo.prototype = Object.create(Loader.prototype);
AlbumInfo.prototype.constructor = AlbumInfo;

AlbumInfo.prototype.getInfo = function(artistName, albumName, cb) {
  var queryObject = {
    method: this.method,
    artist: artistName,
    album: albumName
  };
  this.doGet(queryObject, cb);
}
