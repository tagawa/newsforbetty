$(document).ready(function () {
    'use strict';
    
    window.onhashchange = function() {
        // Get URL hash item and validate it
        var id = location.hash.substring(1);
        if (!(/^[A-z0-9_-]+$/.test(id))) {
            return;
        }
        
        // Skip link focus fix for browsers that do not shift focus when anchor links are clicked.
        var element = document.getElementById(id);
        if (element && element !== document.activeElement) {
            if (!(/^(?:a|select|input|button|textarea)$/i.test(element.tagName))) {
                element.tabIndex = -1;
            }
            element.focus();
        }
    };
    
    function showItems(itemList, sourceObj, cat) {
        $('#news').hide();
        var catName = (!!cat) ? ': ' + sourceObj.categories[cat].name : '';
        $('#news').empty().append('<h1>' + sourceObj.name + catName + '</h1>');
        var tmpTitle;
        $.each(itemList, function(index, item) {
            if (!!item.title && item.title !== tmpTitle) { // Ignore duplicate news items
                var img = '',
                    desc = '',
                    imgDesc = '',
                    extLink = '';
                    
                if (!!item.content && !!item.content.url) {
                    img = '<img src="' + item.content.url + '" alt="Photo to illustrate this news story." class="img-thumbnail">';
                } else if ($.isArray(item.thumbnail)) {
                    img = '<img src="' + item.thumbnail[0].url + '" alt="Photo to illustrate this news story." class="img-thumbnail">';
                }
                
                if ($.isArray(item.description)) {
                    desc = '<p>' + item.description[0] + '</p>';
                } else if (!!item.description) {
                    desc = '<p>' + item.description + '</p>';
                }
                
                if ($.isArray(item.description) && !!item.description[1]) {
                    imgDesc = '<p>Photo: ' + item.description[1] + '</p>';
                }
                
                if ($.isArray(item.link)) {
                    extLink = '<div><a href="' + item.link[0].href + '" class="btn btn-primary read-more">Read more <span class="sr-only">about ' + item.title + '</span></a></div>';
                } else if (!!item.link) {
                    extLink = '<div><a href="' + item.link + '" class="btn btn-primary read-more">Read more <span class="sr-only">about ' + item.title + '</span></a></div>';
                }
                
                $('#news').append('<div class="news-item panel panel-default"><div class="panel-heading"><h2>' + item.title + '</h2></div><div class="panel-body">' + img + desc + imgDesc + extLink + '</div></div>');
            }
            tmpTitle = item.title;
        });
        $('#news').fadeIn('slow');
    }

    function showSources() {
        $.each(sources, function(index, item) {
            $('#sources').append('<button type="button" class="btn btn-lg btn-primary" aria-controls="news" data-source="' + index  + '"> ' + item.name +'</button>');
        });
    }
    
    function showCats(source) {
        $('#categories').hide();
        var cats = sources[source].categories;
        $.each(cats, function(index, item) {
            $('#categories').append('<button type="button" class="btn btn-lg btn-success" aria-controls="news" data-source="' + source + '-' + index + '">' + item.name + '</button>');
        });
        $('#categories').append('<hr>').fadeIn('slow');
    }

    function getNews(source, cat) {
        showWaiting('#news');
        var url = (!!cat) ? sources[source].categories[cat].url : sources[source].url;
        $.ajax({
            url: url,
            success: function(data) {
                showItems(data.query.results.item, sources[source], cat);
            },
            error: function(e) {
                alert('Error: ' + e);
            },
            dataType: 'json',
            type: 'get'
        })
    }

    function showWaiting(el) {
        $(el).empty().append('<p>Please wait...</p><div class="progress"><div class="progress-bar progress-bar-warning progress-bar-striped active" style="width: 100%"></div></div>');
    }

    $('#sources').on('click', '[data-source]', function() {
        $('#categories').empty();
        $('#news').empty();
        var source = $(this).data('source');
        if (!!sources[source].categories) {
            showCats(source);
        } else {
            getNews(source);
        }
    });
    
    $('#categories').on('click', '[data-source]', function() {
        $('#news').empty();
        var dataSource = $(this).data('source').split('-');
        getNews(dataSource[0], dataSource[1]);
    });

    function setFontSize(fontSize) {
      $('body').removeClass('fontSmall fontMed fontLarge');
      $('body').addClass(fontSize);
        if (window.localStorage) {
            window.localStorage['fontSize'] = fontSize;
        }
    }

    $('#fontDecrease').on('click', function() {
        var fontSize = ($('body').hasClass('fontMed') || $('body').hasClass('fontSmall')) ? 'fontSmall' : 'fontMed';
        setFontSize(fontSize);
    });

    $('#fontIncrease').on('click', function() {
        var fontSize = ($('body').hasClass('fontMed') || $('body').hasClass('fontLarge')) ? 'fontLarge' : 'fontMed';
        setFontSize(fontSize);
    });

    if (window.localStorage && window.localStorage['fontSize']) {
      $('body').addClass(window.localStorage['fontSize']);
    }

    function toggleContrast() {
        $('body').toggleClass('high-contrast');
        if (window.localStorage) {
            window.localStorage['contrast'] = $('body').hasClass('high-contrast') ? 'high-contrast' : '';
        }
    }

    $('#toggleContrast').on('click', function() {
      toggleContrast();
    });

    if (window.localStorage && window.localStorage['contrast']) {
        $('body').addClass(window.localStorage['contrast']);
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
