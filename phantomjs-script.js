var webPage = require('webpage');
var page = webPage.create();

page.open('http://www.phantomjs.org', function(status) {
  if (status === "success") {
    page.includeJs('http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js', function() {
      var title = page.evaluate(function() {
        // returnTitle is a function loaded from our do.js file - see below
        return returnTitle();
      });
      console.log(title);
      phantom.exit();
    });
  }
});