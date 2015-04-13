# NewsForBetty
A work-in-progress news site. Very early days. Aimed at those who want a simple, easy-to-read interface.

## Background

Originally [suggested by Melody](https://melodykramer.github.io/how-betty-who-is-89-gets-her-news/) to help out Betty, then coded by Daniel with improvements from Ben, Joseph, Marie, David, Robert and Jamie.

## News sources

News sources are RSS feeds from news websites pulled in using Yahoo's [YQL](https://developer.yahoo.com/yql/) which outputs nice JSON files.

### To suggest a news source

Either [create a new issue](https://github.com/tagawa/newsforbetty/issues/new) with the address of your suggested website, or:

1. Find the RSS feed of the news site you want to add.
2. Go to the [YQL Console](https://developer.yahoo.com/yql/console/#h=select+*+from+rss+where+url%3D%22http%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FHomePage.xml%22)
3. Add the RSS URL to the YQL Statement box. For example:
  ```
  select * from rss where url="http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
  ```
4. Select JSON (not XML) and click Test.
5. Copy the long REST query at the bottom of the screen.
6. Add this to the ```sources``` object in [newsforbetty_sources.js](https://github.com/tagawa/newsforbetty/blob/gh-pages/js/newsforbetty_sources.js) and send a pull request.

## License

All code is released under the [MIT License](http://opensource.org/licenses/MIT)
