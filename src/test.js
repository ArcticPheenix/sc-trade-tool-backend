const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('scdata.db');
 
db.serialize(function() {
  const stmt = db.prepare("SELECT * FROM v_prices");
  stmt.all((err, rows) => {
      rows.forEach(row => {
          console.log(row);
      });
      if (err) {
          console.log(err);
      }
  });
  stmt.finalize();
});
 
db.close();