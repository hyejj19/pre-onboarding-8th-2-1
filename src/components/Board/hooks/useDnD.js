import { useRecoilState } from 'recoil';
import { dndAtom } from '../../../atoms/dndAtom';
import { issuesAtom } from '../../../atoms/issuesAtom';

export const useDnD = (status) => {
  const [totalIssues, setTotalIssues] = useRecoilState(issuesAtom);
  const [dragAndDrop, setDragAndDrop] = useRecoilState(dndAtom);

  const handleDragStart = (e) => {
    if (e.target.className.includes('card')) {
      e.target.style.opacity = '0.4';
      const initialPosition = Number(e.target.dataset.position);

      setDragAndDrop({
        ...dragAndDrop,
        draggedFrom: initialPosition,
        originalStatus: e.target.dataset.status,
        sourceOrder: totalIssues[status],
      });
    }
  };

  // 다른 item 위에 올라와 있을 때 - 매 ms 마다 발생
  const handleDragOver = (e) => {
    e.preventDefault();
    const isClassName = (cls) => e.target.className.includes(cls);

    if (isClassName('card') || isClassName('cardContainer')) {
      const { sourceOrder, draggedFrom, originalStatus } = dragAndDrop;
      const draggedTo = Number(e.currentTarget.dataset.position); // 놓을 수 있는 영역의 인덱스(끝)

      const currentStatus = e.target.dataset.status;
      const currentOrder = totalIssues[currentStatus];
      let itemDragged = sourceOrder[draggedFrom];

      const newOrder = currentOrder.slice();
      const originalOrder = sourceOrder.slice();

      if (currentStatus !== originalStatus) {
        itemDragged = { ...itemDragged, status: currentStatus };
        originalOrder.splice(draggedFrom, 1);
        newOrder.splice(draggedTo, 0, itemDragged);
      } else {
        originalOrder.splice(draggedFrom, 1);
        originalOrder.splice(draggedTo, 0, itemDragged);
      }

      if (draggedTo !== dragAndDrop.draggedTo) {
        // 해당 위치에 drag 가능시, drag 정보를 변경
        setDragAndDrop({
          ...dragAndDrop,
          draggedTo,
          updatedIssues: { ...totalIssues, ...{ [currentStatus]: newOrder, [originalStatus]: originalOrder } },
        });
      }
    }
  };

  const handleDrop = (e) => {
    // 변경된 drag 정보를 적용
    setTotalIssues(dragAndDrop.updatedIssues);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
    });
  };

  const handleDragEnter = (e) => {
    console.log('enter');
  };

  const handleDragEnd = (e) => {
    e.currentTarget.style.opacity = '1';
  };

  return { handleDragStart, handleDragOver, handleDrop, handleDragEnter, handleDragEnd };
};
