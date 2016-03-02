var express = require('express')

var app = new (express)()
app.set('port', process.env.PORT || 3001)

app.use(express.static(__dirname + '/client'))

app.listen(app.get('port'), function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> Listening on port %s. Open up http://localhost:%s/ in your browser.", app.get('port'), app.get('port'))
  }
})