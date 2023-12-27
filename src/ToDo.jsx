import EditTask from "./EditTask";
const ToDo = ({ task, index, taskList, setTaskList }) => {
    const handleDelete = () => {
        const filteredTasks = taskList.filter((_, idx) => idx !== index);
        setTaskList(filteredTasks);
        localStorage.setItem("taskList", JSON.stringify(filteredTasks));
    };

    return (
        <div className="task">
            <div className="section">
                <p className="task-Title">{task.taskName}</p>
                <EditTask taskList={taskList} setTaskList={setTaskList} task={task} index={index} />
            </div>
            <p className="task-Discription">{task.taskDiscription}</p>
            <div className="DeleteButton">
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}
export default ToDo;
