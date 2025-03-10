const mysql = require('mysql')
const pool = require('../mysql/connection')

const getEmployees = (req, res) => {
    let sql = 'SELECT * FROM ?? WHERE ?? = ?';
    let replacements = ['employees', 'emp_no', req.params.emp_no];
    sql = mysql.format(sql, replacements);

    pool.query(sql, (err, rows) => {
        if (err) return res.status(500).send('something went wrong');
        return res.json(rows);
    })
}
if(req.query.include.indexOf("salary") > -1){
    //get the salary
  }


module.exports = { getEmployeesById }