import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 200px 100px auto;
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
  padding: 10 15px;
  margin-left: 5px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserList = styled.ul`
  display: flex;
  margin: 20px auto;
  flex-direction: column;
  width: 700px;
  margin-left: 100px;
  background-color: #ffd;
  border-radius: 4px;

  li {
    font-family: monospace;
    display: flex;
    flex-direction: column;
    margin: 10px 10px;
    padding: 20px 20px;
    box-sizing: border-box;
    list-style: none;
    justify-content: space-between;
    align-items: center;

    & + li {
      margin: 10px 10px;
      padding: 20px 20px;
      border-top: 1px solid #eee;
    }

    img {
      border-radius: 50%;
    }

    strong {
      background-color: #666;
      border-radius: 4px;
      padding: 2px 2px 7px 7px;
    }
  }
`;
