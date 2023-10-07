import React, { useState } from "react";

// CSS
import styles from "./TaskList.module.css";

// Interfaces
import { ITask } from "../interfaces/Task";

type Props = {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(task: ITask): void;
};

function TaskList({ taskList, handleDelete, handleEdit }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  const textDecoration = isChecked ? "line-through" : "none";

  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div className={styles.task} key={task.id}>
            <div className={styles.details}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <h4 style={{ textDecoration }}>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <span
                onClick={() => {
                  handleEdit(task);
                }}
              >
                &#9997;&#127995;
              </span>
              <span
                onClick={() => {
                  handleDelete(task.id);
                }}
              >
                &#128465;&#65039;
              </span>
            </div>
          </div>
        ))
      ) : (
        <p>não há tarefas..</p>
      )}
    </>
  );
}

export default TaskList;
