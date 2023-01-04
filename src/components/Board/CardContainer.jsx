import styled from 'styled-components';

import Status from './Status';
import AddCardBtn from './AddCardBtn';
import Card from '../Card/Card';
import { issues } from '../../DB/Issues';

const CardContainer = () => {
  return (
    <Wrapper>
      <Menu>
        <Status />
        <AddCardBtn />
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

  > div {
    color: var(--border-color);
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
