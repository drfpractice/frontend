import { ACTION_TYPE } from "../actions"

const initialAppState = {
  isWriting: false,
  textToWrite: '',
  results: {
    startTime: '',
    endTime: '',
    wordsWritten: '',
    correctPercent: 0,
    student: '',
  },
  isAuth: false,
  students: [],
  currentStudentId: ''
}

export const appReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOGIN: {
      return { ...state, isAuth: true, students: [...action.payload] }
    }
    case ACTION_TYPE.START_WRITING: {
      return { ...state, isWriting: true, results: { ...state.results, startTime: new Date(Date.now()) } }
    }
    /*Добавить id ученика во время старта */
    case ACTION_TYPE.SET_TEXT_TO_WRITE: {
      return { ...state, textToWrite: action.payload }
    }
    case ACTION_TYPE.SET_RESULTS: {
      return { ...state, isWriting: false, results: { ...state.results, ...action.payload } }
    }
    default:
      return state
  }
}