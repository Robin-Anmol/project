import { useCallback, useEffect, useMemo, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import DraggableElement from "../DraggableTaskCard";

import { KanbanBoardData } from "@/utils/data";

const DragAndDropBoard = () => {
  // const lists = useMemo(() => ["todo", "inProgress", "done"], []);
  // const getItems = (count: number, prefix: string) =>
  //   Array.from({ length: count }).map((k) => {
  //     const randomId = Math.floor(Math.random() * 1000);
  //     return {
  //       id: `item-${Date.now() + randomId}`,
  //       prefix,
  //       content: `item ${Date.now() + randomId}`,
  //     };
  //   });

  // const removeFromList = (list: ItemType[], index: number) => {
  //   const result = Array.from(list);
  //   const [removed] = result.splice(index, 1);
  //   return [removed, result];
  // };

  // const addToList = useCallback((list: ItemType[], index: number, element) => {
  //   const result = Array.from(list);
  //   result.splice(index, 0, element);
  //   return result;
  // }, []);

  // const onDragEnd = useCallback(
  //   (result: DropResult) => {
  //     if (!result.destination) {
  //       return;
  //     }

  //     const listCopy: typeof elements = { ...elements };
  //     const sourceList = listCopy?.[result.source.droppableId];

  //     const [removedElement, newSourceList] = removeFromList(
  //       sourceList,
  //       result.source.index
  //     );

  //     listCopy[result.source.droppableId] = newSourceList;
  //     const destinationList = listCopy[result.destination.droppableId];
  //     listCopy[result.destination.droppableId] = addToList(
  //       destinationList,
  //       result.destination.index,
  //       removedElement
  //     );
  //     setElements(listCopy);
  //     console.log("DD", result, sourceList, listCopy);
  //   },
  //   [elements, addToList]
  // );

  // useEffect(() => {
  //   setElements(generateLists());
  // }, [generateLists]);

  const onDragEnd = () => {
    console.log("dragging ");
  };
  return (
    <div className="px-9 overflow-x-scroll w-full   ">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-3  overflow-x-scroll w-full gap-6">
          {KanbanBoardData.map((panel, index) => (
            <DraggableElement panel={panel} key={panel._id} />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default DragAndDropBoard;
