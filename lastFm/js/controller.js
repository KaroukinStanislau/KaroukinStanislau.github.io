function load() {
  addLoader();
  var topArtists = new TopArtists();
  topArtists.getInfo(displayTopArtist, Pagination.page);
  addSearchEvent();
}

function addSearchEvent() {
  var searchBtn = document.getElementById("search");
  searchBtn.onclick = function() {
    if (document.getElementById("searchInput").value) {
      clearContentBox();
      var artistSearch = new ArtistSearch();
      artistSearch.getInfo(document.getElementById("searchInput").value, displayTopArtist);
    } else {
      //show error;
    }
  };
}

function displayTopArtist() {

  console.log(JSON.parse(this.responseText));

  var fragment = document.createDocumentFragment();
  var content = JSON.parse(this.responseText);

  var artists;
  if (content.hasOwnProperty('artists')) {
    artists = content.artists.artist;
    console.log(Pagination);
    if (Pagination.size === undefined) {
      Pagination.Init(document.getElementById('pagination'), {
        size: content.artists["@attr"].totalPages,
        page: 1,
        step: 3
      });
    }
  } else {
    artists = content.results.artistmatches.artist;
  }
  ///var artists = content.artists.artist;

  artists.forEach(function(artist) {
    var item = document.createElement("div");
    item.className = "item";

    var img = document.createElement("img");
    img.src = artist.image['2']['#text'];
    img.title = artist.name;
    img.className = "img";
    item.appendChild(img);
    img.onclick = function(event) {
      clearContentBox();
      addLoader();
      var artistName = event.currentTarget.title

      var artistInfo = new ArtistInfo();
      artistInfo.getInfo(artistName, displayArtisInfo);

    };

    fragment.appendChild(item);
  });

  clearContentBox();
  getContentBox().appendChild(fragment);
}

function displayArtisInfo() {
  console.log("Artist info");
  console.log(JSON.parse(this.responseText));

  var fragment = document.createDocumentFragment();
  var content = JSON.parse(this.responseText);

  var artist = content['artist'];

  var img = document.createElement("img");
  img.src = artist.image['3']['#text']
  img.className = "artist";
  fragment.appendChild(img);

  var text = document.createElement("div");
  text.textContent = artist.name;
  text.className = "artistname";
  fragment.appendChild(text);

  var text = document.createElement("div");
  text.textContent = artist.bio.content;
  text.className = "artistSummary";
  fragment.appendChild(text);

  clearContentBox();
  var artistInfo = document.createElement("div");
  artistInfo.className = "artistInfo";
  artistInfo.appendChild(fragment);
  getContentBox().appendChild(artistInfo);

  var artistTopAlbums = new ArtistTopAlbums();
  artistTopAlbums.getInfo(artist.name, displayArtistTopAlbums);
}

function displayArtistTopAlbums() {
  console.log("top albums");
  console.log(JSON.parse(this.responseText));

  var fragment = document.createDocumentFragment();
  var content = JSON.parse(this.responseText);

  var albums = content.topalbums.album;

  albums.forEach(function(album) {
    var img = document.createElement("img");
    img.src = album.image['2']['#text'];
    img.title = album.name;
    img.className = "item"
    img.onclick = function(event) {
      var albumInfo = new AlbumInfo();
      addLoader();
      albumInfo.getInfo(content.topalbums["@attr"].artist, event.currentTarget.title, displayAlbumInfo);
    }
    fragment.appendChild(img);
  });

  getContentBox().appendChild(fragment);
}

function displayAlbumInfo() {
  console.log("Album info");
  console.log(JSON.parse(this.responseText));

  var content = JSON.parse(this.responseText);

  var fragment = document.createDocumentFragment();

  var albumInfo = document.createElement("div");
  albumInfo.className = "artistInfo";

  var title = document.createElement("div");
  title.className = "artistname";
  title.textContent = content.album.name;
  albumInfo.appendChild(title);

  var img = document.createElement("img");
  img.src = content.album.image['2']['#text'];
  img.className = "artist";
  albumInfo.appendChild(img);

  var artistSummary = document.createElement("div");
  artistSummary.className = "artistSummary";

  var text = document.createElement("div");
  text.textContent = 'Artist: ' + content.album.artist;
  artistSummary.appendChild(text);

  var text = document.createElement("div");
  const tags = content.album.tags.tag;
  text.textContent = 'Genre: ' + tags.map(function(i) {
    return i['name'];
  }).join('; ');
  artistSummary.appendChild(text);

  albumInfo.appendChild(artistSummary);
  fragment.appendChild(albumInfo);

  var list = document.createElement("ul");

  var tracks = content.album.tracks.track;
  tracks.forEach(function(track) {
    var item = document.createElement("li");
    var audio = document.createElement('a');
    var audioTitle = document.createTextNode(track.name);
    audio.setAttribute('href', track.url);
    audio.appendChild(audioTitle);
    item.appendChild(audio);
    list.appendChild(item);
  });

  fragment.appendChild(list);
  clearContentBox();
  getContentBox().appendChild(fragment);
}

function clearContentBox() {
  getContentBox().innerHTML = '';
}

function getContentBox() {
  return document.querySelector('.content_box');
}

function addLoader() {
  var content_box = getContentBox();
  content_box.innerHTML = '';
  var loader = document.createElement('div');
  loader.classList.add('loader');
  content_box.appendChild(loader);
}

window.addEventListener('load', load);
