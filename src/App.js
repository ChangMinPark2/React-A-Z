import React, {useState} from "react";
import "./App.css";
import List from "./component/List";
import Form from "./component/Form";

export default function App() {

    const [todoData, setTodoData] = useState([]);
    const [value, setValue] = useState("");
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

    return (
        <div className="container">
            <div className="todoBlock">
                <div className="title">
                    <h1>할 일 목록</h1>
                </div>
                <h1 className="text-3xl font-bold underline">
                    Hello world!
                </h1>
                <List todoData={todoData} setTodoData={setTodoData}/>
                <Form value={value} setValue={setValue} handleSubmit={handleSubmit}></Form>
            </div>

        </div>
    )
}