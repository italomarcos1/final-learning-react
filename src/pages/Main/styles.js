import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 100px;
  max-width: 700px;
  padding: 100px;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: #444;
  align-self: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;

  input {
    background-color: #777;
    border: 1.2px solid #252525;
    border-radius: 4px;
    font-size: 16px;
    height: 45px;
    margin: 3px auto;
    padding: 10px 15px;
    transition: background 0.2s;
    width: 100%;

    &::placeholder {
      color: #252525;
    }

    &:hover {
      background-color: ${darken(0.08, '#777')};
      border: 3px solid #252525;
      border-radius: 8px;
    }
  }
`;

export const Title = styled.h1`
  display: flex;
  flex: 1;
  font-family: 'Montserrat';
  font-size: 40px;
  margin-bottom: 30px;
  color: #252525;
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  align-items: center;
  background: #e6b32a;
  border: 1.2px solid #252525;
  border-radius: 8px;
  color: #252525;
  display: flex;
  font-size: 22px;
  font-family: 'Montserrat';
  height: 75px;
  justify-content: center;
  margin-top: 20px;
  padding: 0px 15px;
  transition: background 0.1s;

  &:hover {
    background-color: ${darken(0.09, '#e6b32a')};
    border: 2.5px solid #252525;
    border-radius: 10px;
  }
`;

export const CountryList = styled.ul`
  align-self: center;
  background-color: #444;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 20px auto;
  width: 700px;
`;

export const Country = styled.li.attrs(props => ({
  disabled: props.disabled,
}))`
  background-color: #353535;
  border-radius: 10px;
  display: flex;
  flex: 1;
  flex-direction: row;
  font-family: 'Montserrat';
  margin: 15px;
  max-width: 100%;
  padding: 15px;

  &[disabled] {
    display: none;
  }

  div {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: space-between;

    svg {
      align-self: right;
      margin-right: 20px;
      padding: auto;
    }
    footer {
      background: #444;
      border: 1.5px solid #bbb;
      border-radius: 5px;
      color: #bbb;
      font-family: monospace;
      font-weight: normal;
      font-size: 20px;
      height: 40px;
      margin-left: 20px;
      padding: 5px;
      text-align: center;
      text-transform: uppercase;
      width: 40px;
    }

    small {
      flex: 1;
      text-align: center;
      font-size: 24px;
      color: #111;
      padding: auto;
      white-space: nowrap;
      margin-left: 10px;
    }
  }
`;
