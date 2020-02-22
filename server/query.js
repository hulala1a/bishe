var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'myDB'
});

connection.connect(function (err) {
    if (err) {
        console.log("连接错误");
        return;
    }
    console.log("成功连接MySQL")
})

class query{
    static viewSex(req ,res){
        connection.query('SELECT sex, COUNT(sex) AS num FROM tb_student GROUP BY sex;',  (err, rows, fields) => {
            if(rows[0] || !err){
                console.log('The result is: ', rows);
                res.send(JSON.stringify(rows));
            }
            else {
                res.status(400);
                throw err;
            }
        });
    }
    static viewNation(req ,res){
        connection.query('SELECT nation, COUNT(nation) AS num FROM tb_student GROUP BY nation;',  (err, rows, fields) => {
            if(rows[0] || !err){
                console.log('The result is: ', rows);
                res.send(JSON.stringify(rows));
            }
            else {
                res.status(400);
                throw err;
            }
        });
    }
    static viewNativePlace(req ,res){
        connection.query('SELECT native_place, COUNT(native_place) AS num FROM tb_student GROUP BY native_place;',  (err, rows, fields) => {
            if(rows[0] || !err){
                console.log('The result is: ', rows);
                res.send(JSON.stringify(rows));
            }
            else {
                res.status(400);
                throw err;
            }
        });
    }
    static viewSpecialty(req ,res){
        connection.query('SELECT specialty, COUNT(specialty) AS num FROM tb_student GROUP BY specialty;',  (err, rows, fields) => {
            if(rows[0] || !err){
                console.log('The result is: ', rows);
                res.send(JSON.stringify(rows));
            }
            else {
                res.status(400);
                throw err;
            }
        });
    }
    static viewReachingPoint(req ,res){
        connection.query('SELECT * FROM tb_reaching;',  (err, rows, fields) => {
            if(rows[0] || !err){
                console.log('The result is: ', rows);
                res.send(JSON.stringify(rows));
            }
            else {
                res.status(400);
                throw err;
            }
        });
    }
    static viewClass(req ,res){
        connection.query('SELECT class,class_reaching_point FROM tb_class_reaching WHERE specialty="(?)" AND year = (?);', [req.params.specialty, req.params.year] , (err, rows, fields) => {
            if(rows[0] || !err){
                console.log('The result is: ', rows);
                res.send(JSON.stringify(rows));
            }
            else {
                res.status(400);
                throw err;
            }
        });
    }
    static viewTarget(req ,res){
        connection.query('SELECT course,target,course_point FROM tb_couser_target WHERE specialty = "(?)" AND year = (?);', [req.params.specialty, req.params.year],  (err, rows, fields) => {
            if(rows[0] || !err){
                console.log('The result is: ', rows);
                res.send(JSON.stringify(rows));
            }
            else {
                res.status(400);
                throw err;
            }
        });
    }
    static viewCourse(req ,res){
        connection.query('SELECT course,course_point FROM tb_couser_target WHERE specialty = "(?)" AND year = (?) AND target = "(?)";', [req.params.specialty, req.params.year, req.params.target],   (err, rows, fields) => {
            if(rows[0] || !err){
                console.log('The result is: ', rows);
                res.send(JSON.stringify(rows));
            }
            else {
                res.status(400);
                throw err;
            }
        });
    }
    static viewYear(req ,res){
        connection.query('SELECT year,course_point  FROM tb_couser_target WHERE specialty = "(?)" AND course = "(?)" AND target = "(?)";', [req.params.specialty, req.params.course, req.params.target],  (err, rows, fields) => {
            if(rows[0] || !err){
                console.log('The result is: ', rows);
                res.send(JSON.stringify(rows));
            }
            else {
                res.status(400);
                throw err;
            }
        });
    }
    static viewTop10(req ,res){
        connection.query('SELECT top10 FROM tb_couser_target WHERE specialty = "(?)" AND course = "(?)" AND target = "(?)" AND year = (?) ;', [req.params.specialty, req.params.course, req.params.target, req.params.year],  (err, rows, fields) => {
            if(rows[0] || !err){
                console.log('The result is: ', rows);
                res.send(JSON.stringify(rows));
            }
            else {
                res.status(400);
                throw err;
            }
        });
    }
}

module.exports = query;