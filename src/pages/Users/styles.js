import styled from 'styled-components';

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
