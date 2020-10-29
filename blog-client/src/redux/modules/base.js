import { Map } from "immutable";
import { handleActions, createAction } from "redux-actions";
// redux-action은 https://velopert.com/3358 참고할것.

//액션 타입 선언.
const SET_HEADER_VISIBILITY = "base/SET_HEADER_VISIBILITY"; // 헤더 렌더링 여부 설정

//액션 생성자.
export const setHeaderVisibility = createAction(SET_HEADER_VISIBILITY); // visible

const initialState = Map({
  header: Map({
    visible: true,
  }),
});

//리듀서 : 변화를 일으키는 함수. 두가지 파라미터(state, action)을 받고, 현재 상태와 전달받은 액션을 참고하여 새로운 상태를 만들어서 반환.
export default handleActions(
  {
    [SET_HEADER_VISIBILITY]: (state, action) =>
      state.setIn(["header", "visible"], action.payload),
  },
  initialState
);
