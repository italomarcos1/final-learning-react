import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 30px;
  top: 0;
  left: 0;
  background-color: #252525;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  max-width: 900px;
  margin: 0 auto;
  height: 65px;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      border-left: 1.5px solid #333;
      color: #888;
      font-family: 'Montserrat';
      margin-left: 15px;
      padding-left: 15px;
    }
  }

  aside {
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      text-decoration: none;
      font-family: 'Montserrat';
      font-size: 16px;
      text-transform: uppercase;
      color: #888;
    }

    svg {
      margin-left: 15px;
      border-left: 1.5px solid #333;
      padding-left: 15px;
    }
  }
`;
