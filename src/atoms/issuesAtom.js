import { atom } from 'recoil';
import { issuesAPI } from '../api/issues';

export const issuesAtom = atom({
  key: 'issues',
  default: issuesAPI.getIssues() || {
    todo: [],
    inProgress: [],
    done: [],
  },
});
