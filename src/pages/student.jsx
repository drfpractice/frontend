import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components"
import { selectStudents } from "../store";
import { Lesson } from "../components";

const StudentContainer = ({ className }) => {
  const params = useParams()
  const student = useSelector(selectStudents).filter((student) => {
    return student.id === params.id
  })[0]

  return <div className={className}>
    <h2 className="title">{student.name + ' ' + student.surname}</h2>
    <p className="text">Возраст: {student.age}</p>
    <div className="lessons">
      {student.lessons.map((lesson) => {
        return <Lesson
          lessonInfo={lesson}
        />
      })}
    </div>
  </div>
}

export const Student = styled(StudentContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;

  & .title {
    font-size: 30px;
    margin-bottom: 10px;
  }
`;