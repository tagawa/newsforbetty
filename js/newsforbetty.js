$(document).ready(function () {
    ( function() {
        var is_webkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
            is_opera  = navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
            is_ie     = navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;

        if ( ( is_webkit || is_opera || is_ie ) && document.getElementById && window.addEventListener ) {
            window.addEventListener( 'hashchange', function() {
                var id = location.hash.substring( 1 ),
                    element;

                if ( ! ( /^[A-z0-9_-]+$/.test( id ) ) ) {
                    return;
                }

                element = document.getElementById( id );

                if ( element ) {
                    if ( ! ( /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) ) {
                        element.tabIndex = -1;
                    }

                    element.focus();
                }
            }, false );
        }
    })();

    function showItems(itemList, source) {
        $('#news').empty().append('<h1>News from ' + sources[source].name + '</h1>');
        var tmpTitle;
        $.each(itemList, function(index, item) {
            if (item.title !== tmpTitle) { // Ignore duplicate news items
                var img = (!!item.content && !!item.content.url) ? '<img src="' + item.content.url + '" alt="Photo to illustrate this news story." class="img-thumbnail">' : '';
                img = (!!item.thumbnail) ? '<img src="' + item.thumbnail[0].url + '" alt="Photo to illustrate this news story." class="img-thumbnail">' : img;
                var desc = ($.isArray(item.description)) ? item.description[0] : item.description;
                var imgDesc = ($.isArray(item.description) && !!item.description[1]) ? 'Photo: ' + item.description[1] : '';
                var extLink = ($.isArray(item.link)) ? item.link[0].href : item.link;
                if (!!item.title) {
                    $('#news').append('<div class="news-item panel panel-default"><div class="panel-heading"><h2>' + item.title + '</h2></div><div class="panel-body">' + img + '<p>' + desc + '</p><p>' + imgDesc + '</p><div><a href="' + extLink + '" class="btn btn-primary read-more">Read more <span class="sr-only">about ' + item.title + '</span></a></div></div></div>');
                    console.log(index + ": " + item.title);
                }
            }
            tmpTitle = item.title;
        });
    }

    var sources = {
        'nytusa': {
            'name': 'New York Times (U.S.)',
            'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FHomePage.xml%22&format=json&callback="
            },
        'nytint': {
            'name': 'New York Times (World)',
            'url':             "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FInternationalHome.xml%22&format=json&callback="
        },
        'phillydotcom': {
            'name': 'Philly.com',
            'url':"https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Fwww.philly.com/philly_news.rss%22&format=json&callback="
        },
        'wapolocal' : {
            'name': 'Washington Post (Local)',
            'url':"https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.washingtonpost.com%2Frss%2Flocal%22&format=json&callback="
        },
        'wapo' : {
            'name': "Washington Post (U.S.)",
            'url' : "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.washingtonpost.com%2Frss%2Fnational%22&format=json&callback="
        },
        'wapoworld' : {
            'name': 'Washington Post (World)',
            'url':"https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.washingtonpost.com%2Frss%2Fworld%22&format=json&callback="
        },
        'nationaljournal' : {
            'name': 'National Journal',
            'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Fwww.nationaljournal.com/%3frss%3D1%22&format=json&callback="
        }
    }

    function showSources(){
        $.each(sources, function(index,item){
          $('#sources').append('<button type="button" class="btn btn-lg btn-primary" aria-controls="news" data-source="' + index  + '"> ' + item.name +'</button> ');
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
