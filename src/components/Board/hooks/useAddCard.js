import { useRecoilState } from 'recoil';
import { issuesAtom } from '../../../atoms/issuesAtom';
import { issuesAPI } from '../../../api/issues';

export const useAddCard = (status) => {
  const [issues, setIssues] = useRecoilState(issuesAtom);

  const newCard = {
    id: issues[status].length,
    title: '제목을 입력해주세요.',
    content: '내용을 입력해 주세요.',
    dueDate: '2023-01-04',
    status,
    personInCharge: 0,
  };

  const newCardList = issues[status].slice();
  newCardList.push(newCard);

  return () => {
    setIssues({ ...issues, ...{ [status]: newCardList } });
    issuesAPI.setIssues(issues);
  };
};
