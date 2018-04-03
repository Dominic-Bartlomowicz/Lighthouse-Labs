const pg = require("pg");
const settings = require("./settings"); // settings.json
var argv = process.argv[2];
var moment = require('moment');

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query("SELECT * FROM famous_people WHERE first_name = $1", [argv], (err, result) => {
    console.log("Searching ...");
    if (err) {
      return console.error("error running query", err);
    }
    console.log("Found "+result.rows.length+" person(s) by the name '"+argv+"'")
    for(var i=0; i < result.rows.length; i++){
      console.log("-"+[i+1]+": "+result.rows[i].first_name+" "+result.rows[i].last_name+", born "+"'"+moment(result.rows[i].birthdate).format("YYYY-MM-DD")+"'")
    }
    client.end();
  });
});
