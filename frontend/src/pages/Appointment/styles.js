import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1120px;
  width: 100%;
  height: calc(100% - 82px);
  margin: 0 auto;

  padding: 50px 0;

  button {
    align-self: flex-end;
    padding: 15px 25px;
    border-radius: 10px;
    color: #fff;
    background: #8ADC7D;
    font-size: 24px;
  }
`;

export const Title = styled.h1`
  color: #696969;
  font-size: 48px;
  margin-bottom: 32px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;

  padding-left: 16px;

  section {
    display: flex;
    align-items: center;
    justify-content: space-;


    & + section {
      margin-top: 16px;
    }

    div {
      display: flex;
      flex-direction: column;

      background: rgba(217, 174, 192, 0.15);
      padding: 15px;
      border-radius: 10px;
      width: 100%;

      & + div {
        margin-left: 16px;
      }

      label {
        color: #696969;
        margin-bottom: 8px;

        span {
          margin-left: 2px;
          color: red;
        }
      }

      input {
        border: none;
        background: transparent;
        border-bottom: 2px solid #fff;
        color: #696969;
      }
    }
  }
`;