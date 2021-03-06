import styled from "styled-components";

export const LoginStyles = styled.div`
  width: 400px;
  margin: 0 auto;

    .user-login__title {
      font-size: 50px;
      color: #8551ff;
      margin-bottom: 100px;
      margin-top: 100px;
      text-align: center;
      font-style: italic;
    }

    .user-login__form-control {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
    }

    .user-login__form-control label {
      margin-bottom: 5px;
      color: #979797;
      font-size: 16px;
    }

    .user-login__form-control input {
      border-radius: 4px;
      border: 2px solid #AAAAAA;
      height: 36px;
      padding: 5px 10px;
    }

    .user-login__form-control input:focus {
      outline: 0;
      border-color: #5988df;
    }

    .user-login__submit-button {
      width: 100%;
      margin-top: 30px;
    }

    .user-login__error {
      color: red;
    }

`;