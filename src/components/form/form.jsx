import { useState } from "react";
import { Container } from "../container/container";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth, selectStudents, setTextToWrite } from "../../store";
import { useNavigate } from "react-router-dom";
import { NewStudent } from "./new-student/newStudent";

const FormContainer = ({ className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const isAuth = useSelector(selectIsAuth)
  const [isNewStudent, setIsNewStudent] = useState(false);
  const [studyingText, setStudyingText] = useState('');
  const students = useSelector(selectStudents)


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setTextToWrite(studyingText))
    navigate('/writing')
  }

  return (
    <Container>
      <form
        className={className}
        onSubmit={handleSubmit}
      >
        {isAuth ? (
          <>
            {isNewStudent ? <NewStudent /> :
              (<>
                <label htmlFor="students">
                  Выбор ученика
                </label>
                <select name="students" className="select">
                  {students.map((student) => {
                    return <option
                      value={student.id}
                      key={student.id}>
                      {student.name + ' ' + student.surname}
                    </option>
                  })}
                </select>
              </>
              )
            }
            <button
              className="button"
              onClick={(e) => {
                e.preventDefault()
                setIsNewStudent(!isNewStudent)
              }}
            >
              {isNewStudent ? 'Выбрать из ваших учеников' : 'Добавить нового ученика'}
            </button>
          </>
        ) : <></>}


        <input
          type="text"
          placeholder="Текст для изучения"
          onChange={({ target }) => {
            setStudyingText(target.value)
          }}
        />

        <button
          className="button"
          type="submit"
        >
          Начать
        </button>
      </form>
    </Container>
  )
}

export const Form = styled(FormContainer)`
  border: 1px solid black;
  padding: 10px;
  display: flex;
  flex-direction: column;

  & .select {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;