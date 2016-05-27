$(document).ready(function() { 
  var search = '';
  $('#searchButton').click(function(){
    search = document.getElementById('searchField').value; 
    $.ajax({
      type: 'GET',
      url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&srredirects=true&exlimit=max&gsrsearch=' + search,
      async: true,
      crossDomain: true,
      dataType: "jsonp",
      success: function(data) {
        $('#main').empty();
        for (var i in data.query.pages) {
          var link = 'https://en.wikipedia.org/wiki/' + data.query.pages[i].title.split(' ').join('_');
          $('#main').append('<div class="row"><div class="col-xs-12 resultTitle">' + '<a href=' + link + '>' + data.query.pages[i].title + '</a></div>' + '<div class="col-xs-12 resultLink">' + link + '</div>' + '<div class="col-xs-12 resultDescription">' + data.query.pages[i].extract + '</div></div>'); 
        }  
      },
      error: function(errorMessage) {
        console.log('error');
      }
    });
  });
  $('#random').click(function() {
    window.location = 'https://en.wikipedia.org/wiki/Special:Random'
  })
});