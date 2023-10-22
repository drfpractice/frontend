import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { ACTION_TYPE } from "../../store/actions";
import styled from "styled-components";

const StudentWritingContainer = ({ className, text, isWriting }) => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const words = text.toLowerCase().split(' ');
  const [currentWordProgress, setCurrentWordProgress] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[currentWordIndex]);
  const [mistakes, setMistakes] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    inputRef.current.focus()
    document.onkeydown = (e) => {
      setClickCount((prev) => prev + 1);
      if (e.key === currentWord.charAt(currentWordProgress).toLowerCase()) {
        setCurrentWordProgress((prev) => prev + 1)
        console.log(e.key, currentWordProgress)
        return true
      } else {
        setMistakes((prev) => prev + 1)
        return false
      }
    }
  }, [currentWord, currentWordProgress, currentWordIndex])

  const handleChange = ({ target }) => {
    if (target.value === currentWord) {
      if (currentWordIndex !== words.length - 1) {
        target.value = ''
        setCurrentWordIndex((prev) => prev + 1);
        setCurrentWord(words[currentWordIndex + 1]);
        setCurrentWordProgress(0)
      } else {
        dispatch({
          type: ACTION_TYPE.SET_RESULTS, payload: {
            wordsWritten: text,
            correctPercent: 100 - (mistakes / clickCount * 100),
            endTime: new Date(Date.now())
          }
        })
      }
    }
  }

  return (
    <div className={className}>
      <div className="text-to-write">
        {currentWord}
      </div>

      <input
        type="text"
        className="input-for-student"
        onChange={handleChange}
        onBlur={({ target }) => isWriting ? target.focus() : ''}
        ref={inputRef}
      />
    </div>
  )
}

export const StudentWriting = styled(StudentWritingContainer)`

  & .text-to-write {
    font-size: 100px;
    text-transform: uppercase;
    text-align: center;
  }

  & .input-for-student {
    text-transform: uppercase;
    display: block;
    font-size: 100px;
    margin: 0 auto;
    text-align: center;
  }
`;