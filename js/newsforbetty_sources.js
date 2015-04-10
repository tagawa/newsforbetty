var sources = {
    'nyt': {
        'name': 'New York Times',
        'categories': {
            'world': {
                'name': 'World',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FInternationalHome.xml%22&format=json&callback="
            },
            'usa': {
                'name': 'U.S.',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FHomePage.xml%22&format=json&callback="
            },
            'local': {
                'name': 'Local',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FNYRegion.xml%22&format=json&callback="
            },
            'business': {
                'name': 'Business',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FBusiness.xml%22&format=json&callback="
            },
            'politics': {
                'name': 'Politics',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FPolitics.xml%22&format=json&callback="
            },
            'sports': {
                'name': 'Sports',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FSports.xml%22&format=json&callback="
            }
        }
    },
    'wapo': {
        'name': 'Washington Post',
        'categories': {
            'world' : {
                'name': 'World',
                'url':"https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.washingtonpost.com%2Frss%2Fworld%22&format=json&callback="
            },
            'usa' : {
                'name': "U.S.",
                'url' : "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.washingtonpost.com%2Frss%2Fnational%22&format=json&callback="
            },
            'local' : {
                'name': 'Local',
                'url':"https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.washingtonpost.com%2Frss%2Flocal%22&format=json&callback="
            }
        }
    },
    'phillydotcom': {
        'name': 'Philly.com',
        'url':"https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Fwww.philly.com/philly_news.rss%22&format=json&callback="
    },
    'nationaljournal' : {
        'name': 'National Journal',
        'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Fwww.nationaljournal.com/%3frss%3D1%22&format=json&callback="
    }
}