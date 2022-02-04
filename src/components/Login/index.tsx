import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from '../Store/Context';
import UIButton from '../UI/Button/Button';
import { LoginStyles } from './Login.styles';
import api from '../api';

function initialState() {
  return { user: '', password: ''};
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  async function onSubmit(event) {
    event.preventDefault();

    await api
      .post("/autenticacao", {
        usuario: usuario,
        senha: senha,
      })
      .then((res) => {        
        setToken(res.data.token);
        history.push("/home");
      })
      .catch(() => {
        setError(error);
        setValues(initialState);
      });  
  }

  return (
    <LoginStyles>
      <h1 className="user-login__title">Acesso ao sistema</h1>
      <form onSubmit={onSubmit}>
        <div className="user-login__form-control">
          <label htmlFor="user">Usuário</label>
          <input
            id="user"
            type="text"
            name="user"
            onChange={(e) => setUsuario(e.target.value)}
            value={usuario}
            data-testid="inputUsuario"
          />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
            data-testid="inputSenha"
          />
        </div>
        {error && (
          <div className="user-login__error">{error}</div>
        )}
        <UIButton
          type="submit"
          theme="contained-green"
          className="user-login__submit-button"
          rounded 
          onClick={undefined} 
          to={undefined}
          data-testid="button"
          >
          Login
        </UIButton>
      </form>
    </LoginStyles>
  );
};

export default UserLogin;
