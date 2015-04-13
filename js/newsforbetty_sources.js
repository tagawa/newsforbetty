var sources = {
    'nyt': {
        'name': 'NY Times',
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
            },
            'business': {
                'name': 'Business',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.washingtonpost.com%2Frss%2Fbusiness%22&format=json&callback="
            },
            'politics': {
                'name': 'Politics',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.washingtonpost.com%2Frss%2Fpolitics%22&format=json&callback="
            },
            'sports': {
                'name': 'Sports',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.washingtonpost.com%2Frss%2Fsports%22&format=json&callback="
            },
            'entertainment': {
                'name': 'Entertainment',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.washingtonpost.com%2Frss%2Fentertainment%22&format=json&callback="
            },
            'lifestyle': {
                'name': 'Lifestyle',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.washingtonpost.com%2Frss%2Flifestyle%22&format=json&callback="
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
    },
    'BBC': {
        'name': 'BBC',
        'categories': {
            'top': {
                'name': 'Top Stories',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Frss.xml%22&format=json&callback="
            },
            'world': {
                'name': 'World',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Fworld%2Frss.xml%22&format=json&callback="
            },
            'uk': {
                'name': 'UK',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Fuk%2Frss.xml%22&format=json&callback="
            },
            'business': {
                'name': 'Business',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Fbusiness%2Frss.xml%22&format=json&callback="
            },
            'politics': {
                'name': 'Politics',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Fpolitics%2Frss.xml%22&format=json&callback="
            },
            'health': {
                'name': 'Health',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Fhealth%2Frss.xml%22&format=json&callback="
            },
            'education': {
                'name': 'Education',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Feducation%2Frss.xml%22&format=json&callback=",
            },
            'science': {
                'name': 'Science &amp; Environment',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Fscience_and_environment%2Frss.xml%22&format=json&callback=",
            },
            'tech': {
                'name': 'Technology',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Ftechnology%2Frss.xml%22&format=json&callback=",
            },
            'entertainment': {
                'name': 'Entertainment &amp; Arts',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Fentertainment_and_arts%2Frss.xml%22&format=json&callback=",
            },
        }
    },
    'cnn': {
        'name': 'CNN',
        'categories': {
            'top': {
                'name': 'Top Stories',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.cnn.com%2Frss%2Fedition.rss%22&format=json&callback="
            },
            'world': {
                'name': 'World',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.cnn.com%2Frss%2Fedition_world.rss%22&format=json&callback="
            },
            'usa': {
                'name': 'U.S.',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.cnn.com%2Frss%2Fedition_us.rss%22&format=json&callback="
            },
            'business': {
                'name': 'Business',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.cnn.com%2Frss%2Fmoney_news_international.rss%22&format=json&callback="
            },
            'tech': {
                'name': 'Technology',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.cnn.com%2Frss%2Fedition_technology.rss%22&format=json&callback="
            },
            'entertainment': {
                'name': 'Entertainment',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.cnn.com%2Frss%2Fedition_entertainment.rss%22&format=json&callback="
            },
            'sport': {
                'name': 'Sport',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.cnn.com%2Frss%2Fedition_sport.rss%22&format=json&callback="
            }
        }
    }
}
