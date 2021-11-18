import express from "express";

const Router = express.Router();

Router.get("/", (req, res) => {
    res.send({
        status: 200,
        message: "Welcome to MyXalary Recruitment Service v1.0"
    })
})


Router.use(function (req, res, next) {
    res.status(404).send({ responseCode: 404, message: 'Invalid resource URL', data: [] });
    next();
})

export default Router;