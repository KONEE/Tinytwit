OAuth.initialize('w3yreiP-grykyse7b54PHdNxDSk')
OAuth.popup('twitter').done(function(result) {   
  console.log(result)
    // do some stuff with result
    });
    
    {
      "oauth_token": "1378514551-ZevIdWPV4IvtzwJSPtPBFOnxQTRUfYQVneOmEB2",
        "oauth_token_secret": "s1OYFQSJVzPbSuk7xCiA7ThLw1nwBTe9s0RHjI3JPK9Iq",
          "provider": "twitter"
          }
          
          result.me().done(function(data) {
                // do something with `data`, e.g. print data.name
          })