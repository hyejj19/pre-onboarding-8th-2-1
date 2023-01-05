import styled from 'styled-components';
import { useDelay } from '../../hooks/useDelay';

import Card from '../Card/Card';
import { getContainerStatus } from '../../utils/getContainerStatus';
import { useAddCard } from './hooks/useAddCard';
import { useDnD } from './hooks/useDnD';

const CardContainer = ({ issues, status }) => {
  const handleAddCard = useAddCard(status);
  const { handleDragStart, handleDragOver, handleDrop, handleDragEnter, handleDragEnd } = useDnD(status);

  const { isLoaing, setDelay } = useDelay();

  return (
    <Wrapper
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragEnter={handleDragEnter}
      className={`cardContainer ${status}`}
      data-status={status}>
      <Menu>
        <span>{getContainerStatus(status)}</span>
        <AddBtn onClick={() => setDelay(handleAddCard)}>
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
  min-height: 400px;
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
