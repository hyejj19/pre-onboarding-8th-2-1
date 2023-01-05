import { atom } from 'recoil';

export const dndAtom = atom({
  key: 'dnd',
  default: {
    draggedFrom: null, // 시작 인덱스
    draggedTo: null, // 종료 인덱스
    isDragging: false,
    status: '',
    updatedIssues: {},
    sourceOrder: [],
  },
});
