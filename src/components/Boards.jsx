import styled from 'styled-components';

import Button from './Button';
import Cards from './Cards';

const Boards = () => {
  return (
    <BoardsContainer>
      <MenuContainer>
        <Subject>Subject</Subject>
        <Button />
      </MenuContainer>
      <Board>
        <Cards />
        <Cards />
        <Cards />
      </Board>
    </BoardsContainer>
  );
};

export default Boards;

const BoardsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MenuContainer = styled.div`
  width: 100%;
  height: 50px;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

const Subject = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;
`;

const Board = styled.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  background-color: orange;
  display: flex;
  padding: 1rem;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (min-width: 501px) {
    flex-direction: row;
    align-items: center;
  }
`;
