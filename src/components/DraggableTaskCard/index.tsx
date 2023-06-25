import React from "react";
import { Droppable } from "react-beautiful-dnd";
import TaskCard from "../TaskCard";
import { TaskCardPanelProps, TaskCardProps } from "@/types";
import { Icons } from "@/utils";
import Image from "next/image";

export type DroppableProps = {
  panel: TaskCardPanelProps;
};

const DraggableElement: React.FC<DroppableProps> = ({ panel }) => {
  const totalTask = panel.tasks.length;

  const borderColor =
    panel.title.toString() === "To Do"
      ? "5030E5"
      : panel.title.toString() === "On Progress"
      ? "FFA500"
      : "8BC48A";
  return (
    <div className="p-6 rounded-2xl bg-blubBgColor min-h-screen">
      <div
        className={`flex items-center border-b-[3px]  pb-4   justify-between `}
        style={{ borderColor: `#${borderColor}` }}
      >
        <div className="flex items-center gap-3">
          <span
            className={` w-2 h-2 rounded-full`}
            style={{ backgroundColor: `#${borderColor}` }}
          ></span>
          <span className="text-Heading text-md font-semibold">
            {panel.title}
          </span>
          <span className="w-5 h-5 text-sm text-center  bg-borderColor rounded-full ">
            {totalTask}
          </span>
        </div>
        {panel.isTodo && (
          <Image
            className="w-6 h-6  "
            src={Icons.BLUE_ADD_SQUARE}
            alt="BLUE_ADD_SQUARE"
          />
        )}
      </div>
      <Droppable droppableId={`${panel._id}`}>
        {(provided) => (
          <div
            className="grid mt-6 grid-cols-1 gap-6"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {panel.tasks?.map((task: TaskCardProps, index: number) => (
              <TaskCard key={task._task_id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default DraggableElement;
