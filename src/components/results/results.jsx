import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectResults } from "../../store";
import { useNavigate } from "react-router-dom";

const ResultsContainer = ({ className }) => {
  const results = useSelector(selectResults);
  const navigate = useNavigate()

  const seconds = String(results.endTime.getSeconds() - results.startTime.getSeconds())
  const minutes = String(results.endTime.getMinutes() - results.startTime.getMinutes())
  const hours = String(results.endTime.getHours() - results.startTime.getHours())

  const handleClose = () => {
    document.onkeydown = (e) => { return true }
    navigate('/')
  }
  return (
    <div className={className}>
      <div className="modal-block">
        <p>Потрачено времени на урок: {hours.padStart(2, '0')}:{minutes.padStart(2, '0')}:{seconds.padStart(2, '0')}</p>
        <p>Написанные слова: {results.wordsWritten}</p>
        <p>Процент правильности введеных символов: {results.correctPercent}%</p>

        <button
          onClick={handleClose}
        >Закрыть</button>
      </div>
    </div>
  )
}

export const Results = styled(ResultsContainer)`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);

  & .modal-block {
    padding: 20px;
    background-color: #fff;
    max-width: 700px;
    margin: 0 auto;
  }
`;