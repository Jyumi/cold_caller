var db = require('./');

module.exports = {
  students: {
    getStudent: function (callback) {
      // get all students
      var query = 'SELECT students.id, name, imgurl FROM students INNER JOIN images ON images.id = students.id;';
      db.query(query, (err, students) => {
        if (err) callback(err)
        else callback(null, students)
      })
    },
    postName: function (studentInfo, callback) {
      // add a student
      var query = `insert into students(name) values ("${studentInfo}");`;
      db.query(query, (err, result) => {
        if (err) callback(err)
        else callback(null, result)
      })
    },
    updateName: function ({id, newName}, callback) {
      // update a student's name
      var query = `update students set name = "${newName}" where id = ${id};`;
      db.query(query, (err, result) => {
        if (err) callback(err)
        else callback(null, result)
      })
    }
  },

  images: {
    postImg: function (studentInfo, callback) {
      // add a student image
      var query = `insert into images(imgurl) values ("${studentInfo}");`
      db.query(query, (err, result) => {
        if (err) callback(err)
        else callback(null, result)
      })
    }
  }
};