const express = require('express');
const server = express();
const nunjucks = require('nunjucks')
const {
  pageLanding,
  pageStudy,
  pageGiveClasses,
  saveClasses
} = require('./pages')

//nunjucks configuration
nunjucks.configure("src/views", {
  express: server,
  noCache: true
})

//Configure static itens
server.use(express.static("public"))
//recive data from body
.use(express.urlencoded({ extended: true}))
//rotes
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//server start port
.listen(5500)