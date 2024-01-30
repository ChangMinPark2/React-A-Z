import React, {useState} from "react";
import "./App.css";
import Lists from "./component/Lists";
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
        <div className={"flex items-center justify-center w-screen h-screen bg-blue-100"}>
            <div className={"w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg"}>
                <div className={"flex justify-between mb-3"}>
                    <h1>할 일 목록</h1>
                </div>
                <Lists todoData={todoData} setTodoData={setTodoData}/>
                <Form value={value} setValue={setValue} handleSubmit={handleSubmit}></Form>
            </div>

        </div>
    )
}