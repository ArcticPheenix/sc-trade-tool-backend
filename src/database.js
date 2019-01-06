let getPriceTable = function(db, callback) {
    db.all("SELECT * FROM v_prices", (err, rows) => {
        if (err) {
            console.log(err);
        }
        // console.log(rows);
        return callback(rows);

    });
}

module.exports = getPriceTable;