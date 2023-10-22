import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components"
import { loginAction } from "../../store";

const RegisterContainer = ({ className }) => {
  const dispatch = useDispatch();
  const [formVisible, setFormVisible] = useState(true);
  const [isRegister, setIsRegister] = useState(false);
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [passcheck, setPasscheck] = useState('')
  const [err, setErr] = useState('')

  const handleChangeAction = (e) => {
    e.preventDefault()
    setIsRegister(!isRegister)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isRegister && password !== passcheck) {
      setErr('Пароли не совпадают')
      return
    }

    if (!isRegister) {
      dispatch(loginAction())
    }
  }

  const handleCloseForm = (e) => {
    e.preventDefault()
    setFormVisible(false)
  }

  return (
    <div className={className}>
      <div className={formVisible ? "wrapper" : "hidden"}>
        <form className="form">
          <input
            className="input"
            type="text"
            placeholder="Почта"
            onChange={({ target }) => {
              setMail(target.value)
              setErr('')
            }}
          />
          <input
            className="input"
            type="password"
            placeholder="Пароль"
            onChange={({ target }) => {
              setPassword(target.value)
              setErr('')
            }}
          />

          {isRegister &&
            <input className="input"
              type="password"
              placeholder="Повтор пароля"
              onChange={({ target }) => {
                setPasscheck(target.value)
                setErr('')
              }} />
          }


          <button
            className="button"
            type="submit"
            onClick={handleSubmit}
          >{isRegister ? 'Зарегистрироваться' : 'Войти'}</button>

          <button
            className="button"
            onClick={handleCloseForm}
          >Продолжить без входа</button>
          <button
            className="change-action"
            onClick={handleChangeAction}
          >{isRegister ? 'Войти' : 'Зарегистрироваться'}</button>

          {err && <div className="error-message">{err}</div>}
        </form>
      </div>
    </div>
  )
}


export const Register = styled(RegisterContainer)`
  & .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #e5e5e5;
    display: flex;
    align-items: center;
  }

  & .hidden {
    display: none;
  }

  & .form {
    background-color: #fff;
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
  }

  & .input {
    width: 100%;
    padding: 5px;
    font-size: 18px;
    text-align: center;
    margin-bottom: 10px;
  }

  & .button, .change-action  {
    display: block;
    padding: 5px;
    width: 100%;
    margin-bottom: 10px;
    font-size: 16px;
  }

  & .change-action {
    background-color: transparent;
    border: none;
  }

  & .link {
    display: block;
    text-align: center;
    width: 100%;
  }

  & .error-message {
    background-color: red;
    color: #fff;
    padding: 10px;
    text-align: center;
  }
`;