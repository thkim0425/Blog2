const Router = require("koa-router");
const postRouter = new Router();
const postCtrl = require("./post.controller.js");

postRouter.post("/write", postCtrl.create);
postRouter.post("/:id", postCtrl.show);
postRouter.get("/list", postCtrl.list);

module.exports = postRouter;
