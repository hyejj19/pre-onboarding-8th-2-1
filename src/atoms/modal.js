import { atom } from 'recoil';

export const modalAtom = atom({
  key: 'modal',
  default: {
    isModalOpen: false,
    issue: {},
  },
});
