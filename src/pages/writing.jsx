import { useSelector } from "react-redux";
import { selectIsWriting, selectTextToWrite } from "../store";
import { Container, Results, StudentWriting } from "../components";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

const WritingContainer = ({ className }) => {
  const textToWrite = useSelector(selectTextToWrite);
  const isWriting = useSelector(selectIsWriting);

  if (!textToWrite) {
    return <Navigate to='/' />
  }

  return (
    <Container>
      <StudentWriting
        text={textToWrite}
        isWriting={isWriting} />
      {isWriting ?
        <></>
        :
        <Results />
      }
    </Container>
  )
}

export const Writing = styled(WritingContainer)`

`;