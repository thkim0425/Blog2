const Router = require("koa-router");
const post = new Router();
const postCtrl = require("./post.controller");

post.post("/post", postCtrl.postWrite);
post.post("/post/:id", postCtrl.postDetail);

module.exports = post;
