import "./App.css"
import { useState } from "react"
const AddTask = ({ taskList, setTaskList }) => {
    const [state, setState] = useState(false);
    const [taskName, setTaskName] = useState("");
    const [taskDiscription, setTaskDiscription] = useState("");

    const handleAdd = (e) => {
        e.preventDefault()
        if (!taskName) {
            alert("enter the Task Name to continue")
        }
        else {
            let tempList = taskList;
            tempList.push({ taskName, taskDiscription })
            setState(false);
            // setTaskList([...taskList, { taskName, taskDiscription }]);
            setTaskName("");
            setTaskDiscription("");
            localStorage.setItem("taskList", JSON.stringify(tempList))
            window.location.reload();
        }

    }
    const handleInput = e => {
        const { name, value } = e.target;
        if (name === "taskName") setTaskName(value);
        if (name === "taskDiscription") setTaskDiscription(value)
    }

    return (
        <div className="FirstPage">
            <p>You can add multiple task here!!</p><button onClick={() => { setState(true) }}>Add task+</button>
            {state ? (
                <div className="Addtask">
                    <div className="heading"> <h2>Add new Task</h2>
                        <button className="CloseButton" onClick={() => { setState(false) }}>X</button></div >
                    <label htmlFor="task-name">Task Name</label>
                    <input placeholder="" name="taskName" required value={taskName} onChange={handleInput} />
                    <label htmlFor="task-discription">Task Discription</label>
                    <textarea placeholder="Task Discription" name="taskDiscription" value={taskDiscription} onChange={handleInput} />
                    <button className="AddButton" onClick={handleAdd}>Add</button>
                </div>
            ) : null}

        </div>
    )
}
export default AddTask;