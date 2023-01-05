import { useRecoilState } from 'recoil';
import { issuesAtom } from '../../../atoms/issuesAtom';

export const useDeleteCard = ({ status, id }) => {
  const [issues, setIssues] = useRecoilState(issuesAtom);

  const newCardList = issues[status].filter((issue) => issue.id !== id);

  return () => {
    setIssues({ ...issues, ...{ [status]: newCardList } });
  };
};
