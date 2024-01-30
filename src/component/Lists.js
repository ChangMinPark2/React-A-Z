import React from 'react'
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import List from "./List";


export default function Lists({todoData, setTodoData}) {

    const handleCompleteChange = (id) => {
        let newTodoData = todoData.map(data => {
            if (data.id === id) {
                data.completed = !data.completed;
            }
            return data;
        })
        setTodoData(newTodoData)
    }

    //삭제기능
    const handleClick = (id) => {
        let newTodoData = todoData.filter(data => data.id !== id);
        setTodoData(newTodoData)
    }

    const handleEnd = (result) => {
        if (!result.destination) return;
        const newTodoData=todoData;

        const[reorderedItem] = newTodoData.splice(result.source.index, 1);
        newTodoData.splice(result.destination.index, 0, reorderedItem);
        setTodoData(newTodoData);
    }
    return (
        <div>
            <DragDropContext onDragEnd={handleEnd}>
                <Droppable droppableId="todo">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {todoData.map((data, index) => (
                                <Draggable
                                    key={data.id}
                                    draggableId={data.id.toString()}
                                    index={index}
                                >
                                    {(provided, snapshot) => (
                                        <List
                                        key={data.id}
                                        id={data.id}
                                        title={data.title}
                                        completed={data.completed}
                                        todoData={todoData}
                                        setTodoData={setTodoData}
                                        provided={provided}
                                        snapshot={snapshot}
                                        />
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}