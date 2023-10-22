import { serverAdress } from "../../utils/constants"

export const registerAction = () => {
  return (dispatch) => {

    fetch(serverAdress + '/teacher')

  }
}