import './App.css';
import AddTask from './AddTask';
import { useEffect, useState } from 'react';
import ToDo from './ToDo';
function App() {
  const [taskList, setTaskList] = useState([])
  useEffect(() => {
    let array = localStorage.getItem("taskList");
    if (array) {
      setTaskList(JSON.parse(array))
    }
  }, [])
  return (
    <div className='MainPage'>
      <h1>Task-Tracker</h1>
      <AddTask taskList={taskList} setTaskList={setTaskList} />
      <div className='section'>
        <h1>ToDo</h1>
        <h1>ZXY</h1>
      </div>

      {taskList.map((task, i) =>
        <div className='section'>
          <ToDo task={task} key={i} index={i} taskList={taskList}
            setTaskList={setTaskList} />
          <ToDo task={task} key={i} />
        </div>

      )}
    </div>
  );
}

export default App;
