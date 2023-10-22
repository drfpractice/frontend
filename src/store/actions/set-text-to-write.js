import { ACTION_TYPE } from "./action-types"

export const setTextToWrite = (payload) => {
  return (dispatch) => {
    dispatch({ type: ACTION_TYPE.SET_TEXT_TO_WRITE, payload })
    dispatch({ type: ACTION_TYPE.START_WRITING })
  }
}