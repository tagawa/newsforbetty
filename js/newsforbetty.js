$(document).ready(function () {
    //$("p").text("The DOM is now loaded and can be manipulated.");
    
    // WORKS
    function showItems(itemList) {
        $('#news').empty();
        $.each(itemList, function(index, item) {
            var img = (!!item.content && !!item.content.url) ? '<img src="' + item.content.url + '" alt="Photo to illustrate this news story." class="img-thumbnail">' : '';
            img = (!!item.thumbnail) ? '<img src="' + item.thumbnail[0].url + '" alt="Photo to illustrate this news story." class="img-thumbnail">' : img;
            var desc = ($.isArray(item.description)) ? item.description[0] : item.description;
            var extLink = ($.isArray(item.link)) ? item.link[0].href : item.link;
            $('#news').append('<div class="news-item panel panel-default"><div class="panel-heading"><h2>' + item.title + '</h2></div><div class="panel-body">' + img + '<p>' + item.description + '</p><div><a href="' + extLink + '" class="btn btn-primary read-more">Read more</a></div></div></div>');
            console.log(index + ": " + item.title);
        });
    }
    
    var sources = {
        'nytusa': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FHomePage.xml%22&format=json&callback=",
        'nytint': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FInternationalHome.xml%22&format=json&callback=",
        'bbc': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Frss.xml%22&format=json&callback="
    }
    
    function getNews(source) {
        
        $.ajax({url: sources[source],
            success: function(data) {
                //debugger;
                showItems(data.query.results.item);
            },
            error: function(e) {
                alert("Error: " + e);
            },
            dataType: "json",
            type: "get"
        })
    }
    var source = 'nytint';

    $('[data-source]').each(function() {
        $(this).click(function() {
            $('#news').text('Please wait...');
            var source = $(this).data('source');
            getNews(source);
        })
    });
});