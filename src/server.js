const express = require('express');
const server = express();
const nunjucks = require('nunjucks')
const proffys = [
  {
  name: "Diego Fernandes",
  avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
  whatsapp: "34999648388", 
  bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
  subject: "Química", 
  cost: "20,00", 
  weekday: [
    0
  ], 
  time_from:[
    36000
  ], 
  time_to: [
    43200
  ]
  },
]
//data
const subjects =[
  "Artes",
  "Biologia",
  "Ciências",
  "Educação física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química"
]
const weekdays =[
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado"
]

function getSubject(subjectNumber){
  const position = +subjectNumber-- 
  return subjects[position]
}
function pageLanding(rea, res){
  return res.render("index.html");
}
function pageStudy(req, res){
  const filters = req.query;
  return res.render("study.html", {proffys, filters, subjects, weekdays});
}
function pageGiveClasses(req, res){
  const data = req.query;
  const isNotEmpty = Object.keys(data).length != 0
  //If condition
  if (isNotEmpty) {
    data.subject = getSubject(data.subject) 
    //Add data to proffys lsit
    proffys.push(data)
    //return success page
    return res.redirect("/study")
  //else condition
  }else
  return res.render("give-classes.html", {weekdays, subjects});
}
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