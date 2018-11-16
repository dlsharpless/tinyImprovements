const db = require("../models");

module.exports = function (app) {
    // * A GET route that retrieves all Users from the database.
    app.get("/api/users", function (req, res) {
        db.Users.find({})
            .populate("users")
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });
    // * A GET route that retrieves all Kudos from the database.
    app.get("/api/kudos", function (req, res) {
        db.Kudos.find({})
            .populate("kudos")
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });
    // * A POST route to handle creating new Kudos.
    app.post("/api/kudos", function (req, res) {
        db.Kudos.create(req.body)
            .then(function (data) {
                // let blogId = data._id;
                // let userId = req.params.userid;
                // db.User.findOneAndUpdate({ _id: userId }, { $push: { blogposts: blogId } });
                // res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });
}