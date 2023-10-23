import { useSelector } from "react-redux";
import { selectStudents } from "../store";
import styled from "styled-components"
import { Link } from "react-router-dom";
import { Container } from "../components";

const StatsContainer = ({ className }) => {
  const students = useSelector(selectStudents)

  return (
    <div className={className}>
      {students.map((student) => {
        return <div className="student">
          <Link to={`/student/${student.id}`}>{student.name} {student.surname}</Link>
        </div>
      })}
    </div>
  )
}

export const Stats = styled(StatsContainer)`
  text-align: center;
`;