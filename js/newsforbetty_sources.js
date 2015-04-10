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