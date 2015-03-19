$(document).ready(function () {
    //$("p").text("The DOM is now loaded and can be manipulated.");
    
    // WORKS
    function showItems(itemList, source) {
        $('#news').empty().append('<h1>News from ' + sources[source].name + '</h1>');
        $.each(itemList, function(index, item) {
            var img = (!!item.content && !!item.content.url) ? '<img src="' + item.content.url + '" alt="Photo to illustrate this news story." class="img-thumbnail">' : '';
            img = (!!item.thumbnail) ? '<img src="' + item.thumbnail[0].url + '" alt="Photo to illustrate this news story." class="img-thumbnail">' : img;
            var desc = ($.isArray(item.description)) ? item.description[0] : item.description;
            var extLink = ($.isArray(item.link)) ? item.link[0].href : item.link;
            if (!!item.title) {
                $('#news').append('<div class="news-item panel panel-default"><div class="panel-heading"><h2>' + item.title + '</h2></div><div class="panel-body">' + img + '<p>' + desc + '</p><div><a href="' + extLink + '" class="btn btn-primary read-more">Read more</a></div></div></div>');
                console.log(index + ": " + item.title);
            }
        });
    }

    
    var sources = {
        'nytusa': {
            'name': 'New York Times (U.S.)',
            'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FHomePage.xml%22&format=json&callback="
            },
        'nytint': {
            'name': 'New York Times (International)',
            'url':             "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FInternationalHome.xml%22&format=json&callback="
        }, 
        'phillydotcom': {
          'name': 'Philly.com',
          'url':"https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Fwww.philly.com/philly_news.rss%22&format=json&callback="
        },
        'wapo' : {
          'name': "Washington Post",
          'url' : "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Fwww.washingtonpost.com/wp-srv/topnews/rssheadlines.xml%22&format=json&callback="
        },
        'wapolocal' : {
          'name': 'WashPost Local',
          'url':"https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.washingtonpost.com/rss/local%22&format=json&callback="
        }
    }
    
    function showSources(){
      $.each(sources, function(index,item){
        $('#sources').append('<button type="button" class="btn btn-lg btn-primary" data-source="' + index  + '"> ' + item.name +'</button> ');
      });
    }
    
    
    function getNews(source) {
        $.ajax({url: sources[source].url,
            success: function(data) {
                console.log(source);
                //debugger;
                showItems(data.query.results.item, source);
            },
            error: function(e) {
                alert("Error: " + e);
            },
            dataType: "json",
            type: "get"
        })
    }
    var source = 'nytint';
    
    function showWaiting(el) {
        $(el).empty().append('<p>Please wait...</p><div class="progress"><div class="progress-bar progress-bar-warning progress-bar-striped active" style="width: 100%"></div></div>');
    }

        $('#sources').on("click","[data-source]", function() {
            //$('#news').text('Please wait...');
            showWaiting('#news');
            var source = $(this).data('source');
            getNews(source);
        });
    
    function setFontSize(fontSize) {
        document.body.className = fontSize;
        if (window.localStorage) {
            window.localStorage['fontSize'] = fontSize;
        }
    }
    
$('#fontDecrease').on('click', function() {
     var fontSize = (document.body.className === 'fontMed' || document.body.className === 'fontSmall') ? 'fontSmall' : 'fontMed';
        setFontSize(fontSize);
  });

$('#fontIncrease').on('click', function() {
     var fontSize = (document.body.className === 'fontMed' || document.body.className === 'fontLarge') ? 'fontLarge' : 'fontMed';
     setFontSize(fontSize);
  });
    
    if (window.localStorage && window.localStorage['fontSize']) {
        document.body.className = window.localStorage['fontSize'];
    }
    
    function showGreeting() {
        var greeting = 'Hello.';
        var today = new Date();
        var hours = today.getHours();
        if (hours >= 5 && hours < 12) {
            greeting = 'Good morning.';
        } else if (hours >= 12 && hours < 18) {
            greeting = 'Good afternoon.';
        } else if (hours >= 18 && hours < 23) {
            greeting = 'Good evening.';
        }
      
        $('#greeting').append(greeting);
    }
    
    
    showGreeting();
    
    showSources();
});