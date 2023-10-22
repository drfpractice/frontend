import styled from 'styled-components'
import { Header, Form, Register } from '../components';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../store';

const MainContainer = ({ className }) => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <div className={className}>
      {!isAuth &&
        <Register />
      }
      <Header />
      <Form />
    </div>
  )
}

export const Main = styled(MainContainer)`
  
`;