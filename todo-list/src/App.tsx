import React, { useState } from "react";

// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

// Interface
import { ITask } from "./interfaces/Task";

// CSS
import styles from "./App.module.css";
import Modal from "./components/Modal";
import { channel } from "diagnostics_channel";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  const editTask = (): void => {
    hideOrShowModal(true);
  };

  return (
    <div>
      <Modal
        children={<TaskForm btnText="Editar Tarefa" taskList={taskList} />}
      />
      <Header />
      <main className={styles.main}>
        <h2>Adicionar Tarefas:</h2>
        <TaskForm
          btnText="Criar Tarefa"
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <h2>Tarefas adicionadas:</h2>
        <TaskList
          taskList={taskList}
          handleDelete={deleteTask}
          handleEdit={editTask}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
