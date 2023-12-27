import { useState, useEffect } from "react";

const EditTask = ({ task, taskList, setTaskList }) => {
    const [editModul, seteditModul] = useState(false)
    const [taskName, setTaskName] = useState("");
    const [taskDiscription, setTaskDiscription] = useState("");

    useEffect(() => {
        setTaskName(task.taskName);
        setTaskDiscription(task.taskDiscription)
    }, [task])

    const handleInput = e => {
        const { name, value } = e.target;
        if (name === "taskName") { setTaskName(value) };
        if (name === "taskDiscription") { setTaskDiscription(value) };
    }
    const handleupdate = (e) => {
        e.preventDefault();
        let taskIndex = taskList.indexOf(task);
        taskList.splice(taskIndex, 1, {
            taskName: taskName,
            taskDiscription: taskDiscription
        });
        localStorage.setItem("taskList", JSON.stringify(taskList));
        window.location.reload()
        // setTaskList([...taskList, { taskName, taskDiscription }]);
        setTaskName("");
        setTaskDiscription("");
        seteditModul(false);
    }


    return (
        <div>
            <button onClick={() => { seteditModul(true) }}>Edit</button>
            {editModul ? (
                <div className="Addtask">
                    <div className="heading"> <h2>Update the Task</h2>
                        <button className="CloseButton" onClick={() => { seteditModul(false) }}>X</button></div >
                    <label htmlFor="task-name">Task Name</label>
                    <input placeholder="Task Name" name="taskName" value={taskName} onChange={handleInput} />
                    <label htmlFor="task-discription">Task Discription</label>
                    <textarea placeholder="Task Discription" name="taskDiscription" value={taskDiscription} onChange={handleInput} />
                    <button className="AddButton" onClick={handleupdate}>Update</button>
                </div>
            ) : null}

        </div>)
}
export default EditTask;