import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../container/container";

const HeaderContainer = ({ className }) => {
  return (
    <header className={className}>
      <Container>
        <nav className="nav">
          <li className="nav-item">
            <Link to='/'>
              Главная
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/'>
              Главная
            </Link>
          </li>
        </nav>
      </Container>
    </header>
  )
}

export const Header = styled(HeaderContainer)`
  border: 1px solid black;
  padding: 20px 0;
  font-size: 20px;

  & .nav {
    display: flex;
  }

  & .nav-item {
    margin-right: 20px;
  }
`;