import styled from "styled-components"

const LessonContainer = ({ className, lessonInfo }) => {
  const { words, correct_percent, duration, date } = lessonInfo;

  const dateInfo = new Date(date)
  const day = String(dateInfo.getDate()).padStart(2, '0')
  const month = String(dateInfo.getMonth()).padStart(2, '0')
  const year = String(dateInfo.getFullYear()).padStart(2, '0')

  return <div className={className}>
    <p>{`${day}.${month}.${year}`}</p>
    <p>Продолжительность урока: <strong>{duration}</strong></p>
    <p>Изученные слова: <strong>{words}</strong></p>
    <p>Процент правильности введеных символов: <strong>{correct_percent}%</strong></p>
  </div>
}

export const Lesson = styled(LessonContainer)`
  border: 1px solid black;
  padding: 10px;
`;