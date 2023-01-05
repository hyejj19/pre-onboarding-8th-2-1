import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import Card from '../Card/Card';
import { getContainerStatus } from './getContainerStatus';
import { setDelay } from '../../utils/setDelay';
import { useAddCard } from './hooks/useAddCard';
import { issuesAtom } from '../../atoms/issuesAtom';

const CardContainer = ({ issues, status }) => {
  const handleAddCard = useAddCard(status);
  const [totalIssues, setTotalIssues] = useRecoilState(issuesAtom);

  // Drag & Drop
  // dragAndDrop 초기값
  const [dragAndDrop, setDragAndDrop] = useState({
    draggedFrom: null, // 시작 인덱스
    draggedTo: null, // 종료 인덱스
    isDragging: false,
    originalOrder: [], // 시작 배열 목록
    updatedOrder: [], // 정렬된 배열 목록
    updatedIssues: {},
    status: '',
  });

  const handleDragStart = (e) => {
    e.currentTarget.style.opacity = '0.4';
    const initialPosition = Number(e.target.dataset.position);

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      originalOrder: totalIssues[status],
      status: e.target.dataset.status,
    });
  };

  const handleDragEnd = (e) => {
    e.currentTarget.style.opacity = '1';
  };

  // 다른 item 위에 올라와 있을 때 - 매 ms 마다 발생
  const handleDragOver = (e) => {
    e.preventDefault();
    if (e.target.className.includes('card')) {
      const { originalOrder, draggedFrom, updatedIssues, status } = dragAndDrop;
      const draggedTo = Number(e.currentTarget.dataset.position); // 놓을 수 있는 영역의 인덱스(끝)
      const itemDragged = originalOrder[draggedFrom];

      const newOrder = originalOrder.slice();
      newOrder.splice(draggedFrom, 1);
      newOrder.splice(draggedTo, 0, itemDragged);

      if (draggedTo !== dragAndDrop.draggedTo) {
        // 놓을 수 있는 영역이 변경 되면 객체를 변경해줌
        setDragAndDrop({
          ...dragAndDrop,
          updatedOrder: newOrder,
          draggedTo,
          updatedIssues: { ...totalIssues, ...{ [status]: newOrder } },
        });
      }
    }
  };

  // 다른 item 위로 처음 진입할 때
  const handleDragEnter = (e) => {
    // if (e.target.className.includes('card')) console.log(e.target);
    // if (e.currentTarget.className.includes('cardContainer')) console.log(e.target);
  };

  const handleDrop = (e) => {
    setTotalIssues(dragAndDrop.updatedIssues);

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
    });
  };

  return (
    <Wrapper
      // onDragEnter={(e) => e.target.className.includes('cardContainer') && console.log('drop')}
      // onDrop={(e) => e.currentTarget.className.includes('cardContainer') && console.log('here')}
      className={`cardContainer ${status}`}
      data-status={status}>
      <Menu>
        <span>{getContainerStatus(status)}</span>
        <AddBtn
          onClick={() => {
            setDelay(handleAddCard);
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </AddBtn>
      </Menu>

      <CardWrapper>
        {issues.map((issue, idx) => (
          <Card
            key={issue.id}
            issue={issue}
            idx={idx}
            handleDragStart={handleDragStart}
            handleDragEnd={handleDragEnd}
            handleDragOver={handleDragOver}
            handleDragEnter={handleDragEnter}
            handleDrop={handleDrop}
          />
        ))}
      </CardWrapper>
    </Wrapper>
  );
};

export default CardContainer;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100px;
  padding: 0.5rem;
`;

const Menu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const AddBtn = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
  :hover {
    > svg {
      stroke: var(--hover-color);
      transition: all linear 0.1s;
    }
  }
`;
