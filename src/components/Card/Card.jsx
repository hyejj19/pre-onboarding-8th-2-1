import styled from 'styled-components';

import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { issuesAtom } from '../../atoms/issuesAtom';
import { users } from '../../mock/Issues';
import { useDeleteCard } from './hooks/useDeleteCard';
import { setDelay } from '../../utils/setDelay';
import { issuesAPI } from '../../api/issues';

const Card = ({ issue, handleDragStart, handleDragEnd, handleDragOver, handleDragEnter, handleDrop, idx }) => {
  const handleDeleteCard = useDeleteCard(issue, issue.id);
  const [issues, setIssues] = useRecoilState(issuesAtom);

  const [isEditMode, setIsEditMode] = useState({
    title: false,
    personInCharge: false,
    dueDate: false,
  });

  const titleRef = useRef(null);
  const cardRef = useRef(null);

  const handleEditMode = (subject) => {
    setIsEditMode({
      ...isEditMode,
      ...{ [subject]: !isEditMode[subject] },
    });
    issuesAPI.setIssues(issues);
  };

  useEffect(() => {
    if (isEditMode.title) titleRef.current.focus();
  }, [isEditMode]);

  const [titleValue, setTitleValue] = useState(issue.title);

  const handleTitleValue = (e) => {
    setTitleValue(e.target.value);
  };

  return (
    <Wrapper
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDrop={handleDrop}
      ref={cardRef}
      className={`card ${issue.status}`}
      data-position={idx}
      data-status={issue.status}>
      {isEditMode.title ? (
        <IssueTitle
          type="text"
          value={titleValue}
          onBlur={() => handleEditMode('title')}
          onKeyDown={(e) => e.key === 'Enter' && handleEditMode('title')}
          ref={titleRef}
          onChange={handleTitleValue}
        />
      ) : (
        <div onClick={() => handleEditMode('title')}>{titleValue}</div>
      )}

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

const IssueTitle = styled.input`
  margin-right: 15px;
`;
