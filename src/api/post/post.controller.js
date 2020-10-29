const Account = require("models/Account");

// 글쓰기
exports.postWrite = async (ctx) => {
  ctx.body = "postWrite";
};

// 글보기
exports.postDetail = async (ctx) => {
  ctx.body = "postDetail";
};
