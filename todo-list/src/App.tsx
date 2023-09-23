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

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h2>Adicionar Tarefas:</h2>
        <TaskForm
          btnText="Criar Tarefa"
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <h2>Tarefas adicionadas:</h2>
        <TaskList taskList={taskList} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
