export const getContainerStatus = (status) => {
  if (status === 'todo') return '할 일';
  if (status === 'inProgress') return '진행중';
  if (status === 'done') return '완료';
};
