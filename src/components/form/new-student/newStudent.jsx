import styled from "styled-components";

const NewStudentContainer = ({ className }) => {
  return (
    <div className={className}>
      <input type="text" placeholder="Имя ученика" />
    </div>
  )
}

export const NewStudent = styled(NewStudentContainer)`

`;