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
                $('#news').append('<div class="news-item panel panel-default"><div class="panel-heading"><h2>' + item.title + '</h2></div><div class="panel-body">' + img + '<p>' + item.description + '</p><div><a href="' + extLink + '" class="btn btn-primary read-more">Read more</a></div></div></div>');
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
        }
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

    $('[data-source]').each(function() {
        $(this).click(function() {
            //$('#news').text('Please wait...');
            showWaiting('#news');
            var source = $(this).data('source');
            getNews(source);
        })
    });
    
    document.getElementById('fontDecrease').onclick = function() {
        document.body.className = (document.body.className === '' || document.body.className === 'fontSmall') ? 'fontSmall' : '';
    };
    document.getElementById('fontIncrease').onclick = function() {
        document.body.className = (document.body.className === '' || document.body.className === 'fontLarge') ? 'fontLarge' : '';
    };
    
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
        document.getElementById('greeting').innerHTML = greeting;
    }
    showGreeting();
});