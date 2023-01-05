import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import Board from '../components/Board/Board';
import { issuesAtom } from '../atoms/issuesAtom';
import { issuesAPI } from '../api/issues';

const Main = () => {
  // 컴포넌트 첫 렌더링 & issues 가 업데이트 될 때마다 로컬 스토리지 저장
  const issues = useRecoilValue(issuesAtom);
  useEffect(() => {
    issuesAPI.setIssues(issues);
  }, [issues]);

  return (
    <MainPage>
      <MainWrapper>
        <MainTitleWrapper>
          <MainTitle>Issue Tracker✨</MainTitle>
        </MainTitleWrapper>

        <BoardWrapper>
          <Board />
        </BoardWrapper>
      </MainWrapper>
    </MainPage>
  );
};

export default Main;

const MainPage = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainWrapper = styled.div`
  min-width: 350px;
  max-width: 900px;
  height: 100%;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    width: 400px;
    transition: all ease-in-out 0.2s;
  }
  @media screen and (min-width: 501px) {
    width: 900px;
    transition: all ease-in-out 0.5s;
  }
`;

const MainTitleWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--border-color);
  padding-left: 3rem;
`;

const MainTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;

const BoardWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem;
`;
