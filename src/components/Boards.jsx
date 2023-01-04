import styled from 'styled-components';

const Boards = () => {
  return (
    <BoardsContainer>
      <MenuContainer />
      <CardsContainer />
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
  background-color: green;
`;

const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  background-color: orange;
`;
