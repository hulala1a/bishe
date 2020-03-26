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
        let sql = "SELECT sex, COUNT(sex) AS num FROM tb_student WHERE ";
        let n = 0;
        while(n < req.params.year.length){
            sql += "year=" + req.params.year.slice(n, n+4) +" OR ";
            n += 4;
        }
        sql = sql.slice(0,-3);
        sql += "GROUP BY sex;";
        console.log(sql);
        connection.query(sql,  (err, rows, fields) => {
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
        connection.query('SELECT DISTINCT year FROM tb_student;',  (err, rows, fields) => {
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
        let sql = "SELECT nation, COUNT(nation) AS num FROM tb_student WHERE ";
        let n = 0;
        while(n < req.params.year.length){
            sql += "year=" + req.params.year.slice(n, n+4) +" OR ";
            n += 4;
        }
        sql = sql.slice(0,-3);
        sql += "GROUP BY nation;";
        console.log(sql);
        connection.query(sql,  (err, rows, fields) => {
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
        let sql = "SELECT native_place, COUNT(native_place) AS num FROM tb_student WHERE ";
        let n = 0;
        while(n < req.params.year.length){
            sql += "year=" + req.params.year.slice(n, n+4) +" OR ";
            n += 4;
        }
        sql = sql.slice(0,-3);
        sql += "GROUP BY native_place;";
        console.log(sql);
        connection.query(sql,  (err, rows, fields) => {
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
        connection.query('SELECT requirement,target,requirement_point,target_point FROM tb_requirement_target WHERE specialty = (?) AND year = (?);', [req.params.specialty, req.params.year],  (err, rows, fields) => {
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
    static viewNum(req ,res){
        let sql = "SELECT COUNT(student_id) AS num FROM tb_student WHERE ";
        let n = 0;
        while(n < req.params.year.length){
            sql += "year=" + req.params.year.slice(n, n+4) +" OR ";
            n += 4;
        }
        sql = sql.slice(0,-3);
        sql += ";";
        console.log(sql);
        connection.query(sql,  (err, rows, fields) => {
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
        let sql = "SELECT * FROM tb_reaching WHERE ";
        let n = 0;
        while(n < req.params.year.length){
            sql += "year=" + req.params.year.slice(n, n+4) +" OR ";
            n += 4;
        }
        sql = sql.slice(0,-3);
        sql += ";";
        console.log(sql);
        connection.query(sql,  (err, rows, fields) => {
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
        connection.query('SELECT class,class_reaching_point FROM tb_class_reaching WHERE specialty = (?) AND year = (?);', [req.params.specialty, req.params.year] , (err, rows, fields) => {
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
        connection.query('SELECT course,target,course_point FROM tb_couser_target WHERE specialty = (?) AND year = (?);', [req.params.specialty, req.params.year],  (err, rows, fields) => {
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
        connection.query('SELECT course,course_point FROM tb_couser_target WHERE specialty = (?) AND year = (?) AND target = (?);', [req.params.specialty, req.params.year, req.params.target],   (err, rows, fields) => {
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
    static viewYearCourse(req ,res){
        connection.query('SELECT year,course_point  FROM tb_couser_target WHERE specialty = (?) AND course = (?) AND target = (?);', [req.params.specialty, req.params.course, req.params.target],  (err, rows, fields) => {
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
    static viewStudent(req ,res){
        connection.query('SELECT student_name,student_point FROM tb_student WHERE class = (?) AND year = (?);', [req.params.class, req.params.year],  (err, rows, fields) => {
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