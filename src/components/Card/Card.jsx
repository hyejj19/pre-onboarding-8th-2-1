import styled from 'styled-components';

import { users } from '../../DB/Issues';

const Card = ({ issue }) => {
  return (
    <Wrapper>
      {/* <IssueTitle type="text" value={issue.title} /> */}
      <span>{issue.title}</span>
      <span>{users[issue.personInCharge]}</span>
      <span>{issue.dueDate}</span>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 103, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.046) 0px 1px 3px -1px;

  > * {
    margin-bottom: 0.7rem;
  }
`;

const IssueTitle = styled.input``;
