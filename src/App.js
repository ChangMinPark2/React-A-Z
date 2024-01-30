import React, {useState} from "react";
import "./App.css";
import List from "./component/List";
import Form from "./component/Form";

export default function App() {

    const [todoData, setTodoData] = useState([]);
    const [value, setValue] = useState("");
    // const getStyle = (completed) => {
    //     return {
    //         padding: "10px",
    //         borderBottom: "1px #ccc dotted",
    //         textDecoration: completed ? "line-through" : "none"
    //     }
    // }
    // const state = {
    //     todoData: [],
    //     value: ""
    // }

    //추가기능
    const handleSubmit = (e) => {
        e.preventDefault(); //페이지 리로드 방지

        let newTodo = {
            id: Date.now(),
            title: value,
            completed: false,
        };

        //원래 할일 + 새로운 할일
        setTodoData((prev) => [...prev, newTodo]);
        setValue("");
    }

    // const handleCompleteChange = (id) => {
    //     let newTodoData = todoData.map(data => {
    //         if (data.id === id) {
    //             data.completed = !data.completed;
    //         }
    //         return data;
    //     })
    //     setTodoData(newTodoData)
    // }

    return (
        <div className="container">
            <div className="todoBlock">
                <div className="title">
                    <h1>할 일 목록</h1>
                </div>

                <List todoData={todoData} setTodoData = {setTodoData}/>
                <Form value={value} setValue={setValue} handleSubmit={handleSubmit}></Form>
            </div>

        </div>
    )
}