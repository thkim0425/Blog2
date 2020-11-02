const Post = require("models/Post");

// 글쓰기
exports.create = async (ctx) => {
  // request body 에서 값들을 추출합니다
  const { author, title, letter } = ctx.request.body;

  const post = new Post({
    author,
    title,
    letter,
  });

  try {
    await post.save();
  } catch (e) {
    // HTTP 상태 500 와 Internal Error 라는 메시지를 반환하고,
    // 에러를 기록합니다.
    return ctx.throw(500, e);
  }

  // 저장한 결과를 반환합니다.
  ctx.body = post;
};

// 하나의 포스트 detail하게 보기.
exports.show = (ctx) => {
  ctx.body = "postshow";
};

// 전체 리스트 보기.
exports.list = (ctx) => {
  ctx.body = "postlist";
};
