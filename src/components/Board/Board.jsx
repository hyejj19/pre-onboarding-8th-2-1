import styled from 'styled-components';

import { useRecoilValue } from 'recoil';
import { issuesAtom } from '../../atoms/issuesAtom';
import Button from '../@common/Button';
import CardContainer from './CardContainer';

const Board = () => {
  const issues = useRecoilValue(issuesAtom);
  const titles = Object.keys(issues);
  return (
    <Wrapper>
      <Menu>
        <Subject>Subject</Subject>
        <Button />
      </Menu>
      <BoardWrapper>
        <CardContainer issues={issues.todo} title={titles[0]} />
        <CardContainer issues={issues.inProgress} title={titles[1]} />
        <CardContainer issues={issues.done} title={titles[2]} />
      </BoardWrapper>
    </Wrapper>
  );
};

export default Board;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Menu = styled.div`
  width: 100%;
  height: 50px;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
`;

const Subject = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;
`;

const BoardWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  display: flex;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (min-width: 501px) {
    flex-direction: row;
    align-items: center;
  }
`;
