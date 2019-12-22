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
  flex-direction: row;
  align-items: center;
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

export const CountryList = styled.ul`
  display: flex;
  margin: 20px auto;
  flex-direction: column;
  list-style: none;
  display: grid;
  margin-top: 30px;
  width: 700px;
  margin-left: 100px;
  background-color: #ffd;
  border-radius: 4px;
`;

export const Country = styled.li.attrs(props => ({
  disabled: props.disabled,
}))`
  /* max-width: 100%; */
  flex-direction: row;
  font-family: monospace;
  display: flex;
  background-color: #ffd;
  margin: 20px 20px 20px 20px;
  justify-items: center;

  &[disabled] {
    display: none;
  }

  svg {
    align-self: right;
    margin-left: 400px;
  }

  footer {
    /* flex: 1; */
    background: #fff;
    border: 1px solid #eee;
    padding: 5px 5px 5px 5px;
    text-align: center;
    border-radius: 0 0 5px 5px;
    text-transform: uppercase;
    font-family: monospace;
    font-weight: bold;
    font-size: 24px;
    margin-left: 20px;

    p {
      flex: 1;
      font-size: 16px;
      color: #333;
      line-height: 20px;
      padding: auto;
      text-align: center;
    }
  }
`;
