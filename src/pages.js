const Database = require('./database/db')
const {
  subjects,
  weekdays,
  getSubject,
  convertHoursToMinutes
 } = require('./utils/format')

//data
function pageLanding(rea, res){
  return res.render("index.html");
}

async function pageStudy(req, res){
  const filters = req.query;
  if(!filters.subject || !filters.weekday ||!filters.time){
    return res.render("study.html", {filters, subjects, weekdays});
  }
  const timeToMinutes = convertHoursToMinutes(filters.time)
  const query = `
    SELECT classes.*,proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE EXISTS(
      SELECT class_schedule.*
      FROM class_schedule
      WHERE class_schedule.class_id = classes.id
      AND class_schedule.weekday = ${filters.weekday}
      AND class_schedule.time_from <= ${timeToMinutes}
      AND class_schedule.time_to > ${timeToMinutes}
    )
    AND classes.subject = '${filter.subject}'
  ` 
  try {
    const db = await Database
    const proffys = await db.all(query)

    return res.render('study.html', {proffys, filters, subjects, weekdays})
  } catch (error) {
    console.log(error)
  }
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

module.exports = {
  pageLanding,
  pageStudy,
  pageGiveClasses
}