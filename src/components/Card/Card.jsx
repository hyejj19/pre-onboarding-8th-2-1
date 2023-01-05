import styled from 'styled-components';

import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { issuesAtom } from '../../atoms/issuesAtom';
import { PERSON_IN_CHARGE as users } from '../../constants/issue';
import { useDeleteCard } from './hooks/useDeleteCard';
import { useDelay } from '../../hooks/useDelay';
import { modalAtom } from '../../atoms/modal';

const Card = ({ issue, handleDragStart, handleDragEnd, handleDragOver, handleDrop, idx }) => {
  const handleDeleteCard = useDeleteCard(issue, issue.id);
  const [modal, setModal] = useRecoilState(modalAtom);
  const [titleValue, setTitleValue] = useState(issue.title);

  const { isLoaing, setDelay } = useDelay();

  const handleModalOpen = () => {
    setModal({ isModalOpen: true, issue });
  };

  return (
    <Wrapper
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={`card ${issue.status}`}
      data-position={idx}
      data-status={issue.status}>
      <div>{titleValue}</div>

      <EditBtn onClick={() => setDelay(handleModalOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </EditBtn>
      <DeleteBtn onClick={() => setDelay(handleDeleteCard)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </DeleteBtn>

      <span>{users[issue.personInCharge]}</span>
      <span>{issue.dueDate}</span>
    </Wrapper>
  );
};

export default Card;

const DeleteBtn = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
  position: absolute;
  right: 12px;
  visibility: hidden;

  :hover {
    > svg {
      stroke: var(--hover-color);
      transition: all linear 0.1s;
    }
  }
`;

const EditBtn = styled(DeleteBtn)`
  bottom: 5px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 103, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.046) 0px 1px 3px -1px;
  position: relative;

  > * {
    margin-bottom: 0.7rem;
  }

  .over {
    background-color: red;
  }

  :hover {
    ${DeleteBtn} {
      transition: all linear 0.1s;
      visibility: visible;
    }
  }
`;
