function Loader() {
  this.url = "http://ws.audioscrobbler.com/2.0/?";
  this.apiKey = "2800b263987b197ffc793a8805784f41";
  this.format = "json";
}

Loader.prototype.doGet = function(queryObject, display) {

  this.xhr = new XMLHttpRequest();
  this.xhr.onreadystatechange = function() {
    if (this.readyState === 4) {
      if (this.status === 200) {
        if (typeof display == "function") {
          display.apply(this);
        }
      } else {
        console.error(this.statusText);
      }
    }
  };

  queryObject.api_key = this.apiKey;
  queryObject.format = this.format;
  var query = this._buildQuery(queryObject);
  this.xhr.open('GET', query, true);
  this.xhr.send(null);
};

Loader.prototype._buildQuery = function(queryObject) {
  var query = [];
  for (var key in queryObject)
    query.push(encodeURIComponent(key) + '=' + encodeURIComponent(queryObject[key]));
  return this.url + query.join('&');
};
