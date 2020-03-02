import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  align-items: center;
  justify-content: center;

  img {
    display: block;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 5px solid #e6b32a;
  }

  h1 {
    color: #333;
    border-top: 1px solid #e6b32a;
    border-bottom: 1px solid #e6b32a;
    padding: 20px 20px;
    margin: 20px auto;
    font-size: 48px;
  }

  div {
    margin-top: 20px;
    display: flex;
    width: 150px;
    justify-content: space-between;
    align-items: center;
    height: 60px;
  }
`;
