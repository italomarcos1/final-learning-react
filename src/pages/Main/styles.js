import styled from 'styled-components';

export const Container = styled.div`
  margin: 200px auto;
  max-width: 700px;
  padding: 100px;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #ffd;
  align-self: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const Title = styled.h1`
  display: flex;
  font-family: monospace;
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  background: #99a;
  border: 0;
  padding: 0 15px;
  margin-left: 5px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
