var Pagination = {

  code: '',

  Extend: function(data) {
    data = data || {};
    Pagination.size = data.size || 30;
    Pagination.page = data.page || 1;
    Pagination.step = data.step || 3;
  },

  Add: function(s, f) {
    for (var i = s; i < f; i++) {
      Pagination.code += '<a>' + i + '</a>';
    }
  },

  Click: function() {
    Pagination.page = +this.innerHTML;
    Pagination.Start();
    console.log(Pagination.page);
    load();
  },

  Bind: function() {
    var a = Pagination.e.getElementsByTagName('a');
    for (var i = 0; i < a.length; i++) {
      if (+a[i].innerHTML === Pagination.page) a[i].className = 'current';
      a[i].addEventListener('click', Pagination.Click, false);
    }
  },

  Finish: function() {
    Pagination.e.innerHTML = Pagination.code;
    Pagination.code = '';
    Pagination.Bind();
  },

  Start: function() {
    if (Pagination.size < Pagination.step * 2 + 6) {
      Pagination.Add(1, Pagination.size + 1);
    } else if (Pagination.page < Pagination.step * 2 + 1) {
      Pagination.Add(1, Pagination.step * 2 + 2);
    } else if (Pagination.page > Pagination.size - Pagination.step * 2) {
      Pagination.Add(Pagination.size - Pagination.step * 2, Pagination.size + 1);
    } else {
      Pagination.Add(Pagination.page - Pagination.step, Pagination.page + Pagination.step + 1);
    }
    Pagination.Finish();
  },

  Create: function(e) {
    e.innerHTML = '<span></span>';
    Pagination.e = e.getElementsByTagName('span')[0];
  },

  Init: function(e, data) {
    Pagination.Extend(data);
    Pagination.Create(e);
    Pagination.Start();
  }
};
