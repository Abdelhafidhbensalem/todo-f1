import logo from './logo.svg';
import './App.css';
import { tasks } from "./data"
import TaskList from './components/taskList/TaskList';
import { useState } from 'react';

function App() {
  const [tasksM, setTasksM] = useState(tasks)
  const handleDone = (x) => {
    setTasksM(tasksM.map(el => el.id == x ? { ...el, isDone: !el.isDone } : el))
  }


  return (
    <div className="App">
      <h1>TODO APP</h1>
      <TaskList tasks={tasksM} handleDone={handleDone} />
    </div>
  );
}

export default App;
