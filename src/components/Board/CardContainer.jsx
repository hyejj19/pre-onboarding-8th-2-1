import styled from 'styled-components';

import Card from '../Card/Card';
import { getContainerStatus } from './getContainerStatus';
import { setDelay } from '../../utils/setDelay';
import { useAddCard } from './hooks/useAddCard';

const CardContainer = ({ issues, title }) => {
  const handleAddCard = useAddCard(title);

  return (
    <Wrapper>
      <Menu>
        <span>{getContainerStatus(title)}</span>
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
        {issues.map((issue) => (
          <Card key={issue.id} issue={issue} />
        ))}
      </CardWrapper>
    </Wrapper>
  );
};

export default CardContainer;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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
