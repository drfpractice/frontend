import styled from 'styled-components'
import { Header, Form, Register } from '../components';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../store';
import { Link } from 'react-router-dom';

const MainContainer = ({ className }) => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <div className={className}>
      {!isAuth &&
        <Register />
      }
      <Form />
      <Link
        className='link'
        to='/stats'>Статистика по ученикам</Link>
    </div>
  )
}

export const Main = styled(MainContainer)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;