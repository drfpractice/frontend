import { serverAdress } from "../../utils/constants"
import { ACTION_TYPE } from "./action-types"

export const loginAction = () => {
  return async (dispatch) => {
    const res = await fetch(serverAdress + '/teacher')

    const data = await res.json()

    dispatch({ type: ACTION_TYPE.LOGIN, payload: data.students })

  }
}