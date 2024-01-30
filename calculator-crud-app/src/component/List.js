import React, {useState} from 'react'
import {Draggable} from "react-beautiful-dnd";

const List = React.memo(({
                             id, title, cost, completed, todoData, setTodoData, provided, snapshot,
                         }) => {

    const[isEditing, setIsEditing] = useState(false);
    const[editedTitle, setEditedTitle] = useState(title);
    const[editedCost, setEditedCost] = useState(cost);

    const handleCompleteChange = (id) => {
        let newTodoData = todoData.map(data => {
            if (data.id === id) {
                data.completed = !data.completed;
            }
            return data;
        })
        setTodoData(newTodoData)
        localStorage.setItem('todoData', JSON.stringify(newTodoData));

    }
    //삭제기능
    const handleClick = (id) => {
        let newTodoData = todoData.filter(data => data.id !== id);
        setTodoData(newTodoData)
        localStorage.setItem('todoData', JSON.stringify(newTodoData))
    }

    const handleEditChange = (e) => {
        if(e.target.name === "title") {
            setEditedTitle(e.target.value);
        } else if(e.target.name === "cost") {
            setEditedCost(e.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (isNaN(editedCost)) {
            alert('비용에는 숫자만 입력해주세요.');
            return;
        }

        let newTodoData = todoData.map(data => {
            if (data.id === id) {
                data.title = editedTitle;
                data.cost = editedCost;  // 비용도 함께 수정
            }
            return data;
        })
        setTodoData(newTodoData);
        localStorage.setItem('todoData', JSON.stringify(newTodoData));

        setIsEditing(false);
    }

    if (isEditing) {
        return (
            <div className={`flex items-center justify-between w-full px-4 my-2 text-gray-600 bg-gray-100 border rounded`}>
                <div className={"items-center"}>
                    <form onSubmit={handleSubmit}>
                        <input
                            name={"title"}
                            value={editedTitle}
                            onChange={handleEditChange}
                            className={"w-full px-3 py-2 mr-4 text-gray-500 rounded"}
                        />
                        <input
                            name="cost"
                            value={editedCost}
                            onChange={handleEditChange}
                            className={"w-full px-3 py-2 mr-4 text-gray-500 rounded"}
                        />
                    </form>
                </div>
                <div className={"items-center"}>
                    <button className={"px-4 py-2 float-right"}
                            onClick={() => setIsEditing(false)}>
                    x
                    </button>
                    <button
                        onClick={handleSubmit}
                        className={"px-4 py-2 float-right"}
                        type={"submit"}
                    >
                        save
                    </button>
                </div>
            </div>
        )
    } else {
        return (
            <div
                key={id}
                {...provided.draggableProps}
                ref={provided.innerRef}
                {...provided.dragHandleProps}
                className={`${
                    snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"}
                flex items-center justify-between w-full px-4 my-2 text-gray-600 bg-gray-100 border rounded`}
            >
                <div className={"items-center"}>
                    <input type={"checkbox"}
                           defaultChecked={false}
                           onChange={() => handleCompleteChange(id)}
                    />{" "}
                    <span
                        className={completed ? "line-through" : undefined}>
                                                        {title} --- {cost}원
                                                    </span>
                </div>
                <div className={"items-center"}>
                    <button className={"px-4 py-2 float-right"}
                            onClick={() => handleClick(id)}>x
                    </button>
                    <button className={"px-4 py-2 float-right"}
                            onClick={() => setIsEditing(true)}>edit
                    </button>
                </div>
            </div>
        )
    }
});

export default List