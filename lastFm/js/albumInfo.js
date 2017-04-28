function AlbumInfo() {
  this.method = "album.getinfo";
  Loader.apply(this, arguments);
}

AlbumInfo.prototype = Object.create(Loader.prototype);
AlbumInfo.prototype.constructor = AlbumInfo;

AlbumInfo.prototype.getInfo = function(artistName, albumName) {
  var queryObject = {
    method: this.method,
    artist: artistName,
    album: albumName
  };
  this.doGet(queryObject, this._display);
};

AlbumInfo.prototype._display = function() {
  console.log("Album info");
  console.log(JSON.parse(this.responseText));
}
