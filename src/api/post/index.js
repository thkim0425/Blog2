const Router = require("koa-router");
const postRouter = new Router();
const postCtrl = require("./post.controller.js");

postRouter.post("/write", postCtrl.create);
postRouter.get("/:id", postCtrl.show);
postRouter.delete("/:id", postCtrl.deletePost);
postRouter.get("/", postCtrl.list);
module.exports = postRouter;
