import uuid from 'react-uuid';
import { useRecoilState } from 'recoil';
import { issuesAtom } from '../../../atoms/issuesAtom';

export const useAddCard = (status) => {
  const [issues, setIssues] = useRecoilState(issuesAtom);

  const newCard = {
    id: uuid(),
    title: issues[status].length,
    content: '내용을 입력해 주세요.',
    dueDate: '2023-01-04',
    status,
    personInCharge: 0,
  };

  const newCardList = issues[status].slice();
  newCardList.push(newCard);

  return () => {
    setIssues({ ...issues, ...{ [status]: newCardList } });
  };
};
