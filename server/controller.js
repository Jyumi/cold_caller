const helper = require('../db/dbhelpers');

const controller = {
  students: {
    get: (req, res) => {
      helper.students.getStudent((err, results) => {
        if (err) res.status(404).send(err)
        else res.status(200).send(results)
      })
    },
    post: (req, res) => {
      helper.students.postName(req.body.name, (err, results) => {
        if (err) res.status(404).send(err)
        else res.status(200).send('success')
      })
    },
    update: (req, res) => {
      var request = {
        newName: req.body.newName,
        id: req.params.id
      };
      helper.students.updateName(request, (err, results) => {
        if (err) res.status(404).send(err)
        else res.status(200).send('success')
      })
    }
  },

  images: {
    post: (req, res) => {
      helper.images.postImg(req.body.imgurl, (err, results) => {
        if (err) {console.error(err)};
        res.status(200).send('success')
      })
    },
  }
};

module.exports = controller