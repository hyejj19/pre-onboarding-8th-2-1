import { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { modalAtom } from '../../atoms/modal';
import { STATUS, PERSON_IN_CHARGE } from '../../constants/issue';
import { getContainerStatus } from '../../utils/getContainerStatus';

const Modal = () => {
  const [modalData, setModalData] = useRecoilState(modalAtom);
  const { issue } = modalData;
  const [newModalData, setNewModalData] = useState({
    title: issue.title,
    DueDate: issue.DueDate,
    status: issue.status,
    persinInCharge: issue.persinInCharge,
    content: issue.content,
  });
  const [status, setStatus] = useState('');
  const [personInCharge, setPersonInCharge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const getValue = (cls) => e.target.getElementsByClassName(cls);
    const title = getValue('title').innerText;
    const dueDate = getValue('dueDate').innerText;
    const content = getValue('content');
    console.log(status, personInCharge);
  };

  return (
    <ModalWrapper onSubmit={handleSubmit}>
      <label>제목</label>
      <Title className="title" type="text" defaultValue={newModalData.title} />
      <label>마감 기한</label>
      <DueDate className="dueDate" type="datetime-local" value={issue.DueDate} />
      <label>상태</label>
      <Status className="status" onChange={(e) => setStatus(e.target.value)}>
        {STATUS.map((v) => (
          <option value={v} key={v}>
            {getContainerStatus(v)}
          </option>
        ))}
      </Status>
      <label>담당자</label>
      <PersonInCharge className="personInCharge" onChange={(e) => setPersonInCharge(e.target.value)}>
        {PERSON_IN_CHARGE.map((v) => (
          <option value={v} key={v}>
            {v}
          </option>
        ))}
      </PersonInCharge>
      <label>메모</label>
      <Content className="content" />
      <SubmitButton type="submit">저장✨</SubmitButton>
    </ModalWrapper>
  );
};

export default Modal;

const ModalWrapper = styled.form`
  position: absolute;
  z-index: 10;
  width: 350px;
  padding: 30px 20px;
  background-color: #ffffffec;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  box-shadow: rgba(99, 99, 103, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.046) 0px 1px 3px -1px;

  > label {
    margin-bottom: 2px;
  }

  > input,
  select {
    padding: 5px;
    margin-bottom: 5px;
  }

  > textarea {
    height: 100px;
    max-width: 100%;
  }
`;

const Title = styled.input``;
const DueDate = styled.input``;
const Status = styled.select``;
const PersonInCharge = styled.select``;
const Content = styled.textarea``;
const SubmitButton = styled.button`
  margin-top: 15px;
  padding: 5px 0;
`;
