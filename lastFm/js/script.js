var div = document.createElement('div');
div.innerHTML = "Loading, please wait...";

image_box.appendChild(div);
var topArtists = new TopArtists();
topArtists.getInfo();

var artistSearch = new ArtistSearch();
artistSearch.getInfo("kaytranada");
artistSearch.getInfo("mr");

var artistInfo = new ArtistInfo();
artistInfo.getInfo("mr. oizo");

var albumInfo = new AlbumInfo();
albumInfo.getInfo("The Prodigy", "The fat of the land");

console.dir(albumInfo)
