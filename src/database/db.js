const Database = require('sqlite-async')
Database.open(__dirname + '/database.sqlite').then(execute);

function execute(db) {
  //create table
  db.exec(`
    CREATE TABLE IF NOT EXISTS proffys (
      id_proffy INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      avatar TEXT,
      whatsapp TEXT,
      bio TEXT
    );
    CREATE TABLE IF NOT EXISTS classes(
      id_class INTEGER PRIMARY KEY AUTOINCREMENT,
      subject TEXT,
      cost TEXT,
      id_proffy INTEGER
    );
    CREATE TABLE IF NOT EXISTS class_schedule(
      id_schedule INTEGER PRIMARY KEY AUTOINCREMENT,
      id_class INTEGER,
      weekday INTEGER,
      time_from INTEGER,
      time_to INTEGER
    );
  `)
}