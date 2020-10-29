const Router = require("koa-router");

const api = new Router();

const auth = require("./auth");
const post = require("./post");

api.use("/auth", auth.routes());
api.use("/post", post.routes());

module.exports = api;
