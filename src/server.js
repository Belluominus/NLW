require('express')()
.get("/", (req, res) => {
  return res.send()
})
.get("/study", (req, res)=>{
  return res.send()
})
.listen(5500)