import styled from 'styled-components';

export const Container = styled.div`
  background-color: #292929;
  display: flex;

  height: 100%;

  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    display: block;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 5px solid #e6b32a;
    user-select: none;
  }

  h1 {
    color: #191919;
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
