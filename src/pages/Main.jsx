import styled from 'styled-components';

import Boards from '../components/Boards';

const Main = () => {
  return (
    <MainPage>
      <MainContainer>
        <MainTitleContainer>
          <MainTitle>✨ Issue Tracker</MainTitle>
        </MainTitleContainer>
        <BoardsContainer>
          <Boards />
        </BoardsContainer>
      </MainContainer>
    </MainPage>
  );
};

export default Main;

const MainPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainContainer = styled.div`
  @media screen and (max-width: 500px) {
    width: 400px;
    transition: all ease-in-out 0.2s;
  }
  @media screen and (min-width: 501px) {
    width: 800px;
    transition: all ease-in-out 0.5s;
  }
  min-width: 350px;
  max-width: 800px;
  height: 100%;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
`;

const MainTitleContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--border-color);
  padding-left: 3rem;
`;

const MainTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0.5rem 0;
`;

const BoardsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem;
`;
