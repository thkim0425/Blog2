const Router = require("koa-router");

const api = new Router();

const auth = require("./auth");
const post = require("./post");

api.use("/post", post.routes());
api.use("/auth", auth.routes());

module.exports = api;
