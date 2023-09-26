import React from "react";

// CSS
import styles from "./TaskList.module.css";

// Interfaces
import { ITask } from "../interfaces/Task";

type Props = {
  taskList: ITask[];
  handleDelete(id: number): void;
};

function TaskList({ taskList, handleDelete }: Props) {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div className={styles.task} key={task.id}>
            <div className={styles.details}>
              <h4>
                <input type="checkbox" />
                {task.title}
              </h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <span>&#9997;&#127995;</span>
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
