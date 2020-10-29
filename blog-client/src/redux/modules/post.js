import { createAction, handleActions } from "redux-actions";

import { Map } from "immutable";
import { pender } from "redux-pender";
import * as PostAPI from "lib/api/post";

const POST_WRITE = "post/POST_WRITE"; // 글 쓰기
//const POST_LIST = "post/POST_LIST"; // 포스팅된 글들 리스트 받아오기.

export const postWrite = createAction(POST_WRITE, PostAPI.postWrite);
//export const postList = createAction(POST_LIST);

const initialState = Map({
  post: Map({
    title: "",
    author: "",
    letter: "",
  }),
  result: Map({}),
});

export default handleActions(
  {
    ...pender({
      type: POST_WRITE,
      onSucess: (state, action) =>
        state.set("result", Map(action.payload.data)),
    }),
  },
  initialState
);
