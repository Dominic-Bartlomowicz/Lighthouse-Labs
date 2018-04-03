var moment = require('moment');
var first = process.argv[2];
var last = process.argv[3];
var date = process.argv[4];

var knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'postgres',
    password : 'newPassword',
    database : 'test_db',
    port: 5432,
    ssl: true
  }
});

knex('famous_people').insert({first_name: first, last_name: last, birthdate: date})
.asCallback(function (err) {
  if(err) return console.error(err);
  knex.select('*')
  .from('famous_people')
  .asCallback(function(err, rows) {
    if (err) return console.error(err);
    for(var i=0; i < rows.length; i++){
      console.log("-"+[i+1]+": "+rows[i].first_name+" "+rows[i].last_name+", born "+"'"+moment(rows[i].birthdate).format("YYYY-MM-DD")+"'")
    }
  });
})


console.log(first);
console.log(last);
console.log(date);
