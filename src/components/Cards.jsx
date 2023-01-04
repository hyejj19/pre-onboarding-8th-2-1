import styled from 'styled-components';

const Cards = () => {
  return (
    <CardContainer>
      <div>
        <span>할 일</span>
        <span>+</span>
      </div>
      <div>
        <span>제목</span>
        <span>담당자</span>
        <span>날짜</span>
      </div>
    </CardContainer>
  );
};

export default Cards;

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
`;
