const express = require('express');
const server = express();
const nunjucks = require('nunjucks')
const {
  pageLanding,
  pageStudy,
  pageGiveClasses
} = require('./pages')

//nunjucks configuration
nunjucks.configure("src/views", {
  express: server,
  noCache: true
})

//Configure static itens
server.use(express.static("public"))
//rotes
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//server start port
.listen(5500)