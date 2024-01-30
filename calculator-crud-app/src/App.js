import React, {useState} from "react";
import "./App.css";
import Lists from "./component/Lists";
import Form from "./component/Form";

const initialTodoData = localStorage.getItem("todoData") ? JSON.parse(localStorage.getItem("todoData")) : [];
export default function App() {

  const [todoData, setTodoData] = useState(initialTodoData);
  const [value, setValue] = useState("");
  const [cost, setCost] = useState("");
  //추가기능
  const handleSubmit = (e) => {
    e.preventDefault(); //페이지 리로드 방지

    let newTodo = {
      id: Date.now(),
      title: value,
      cost: cost,
      completed: false,
    };

    //원래 할일 + 새로운 할일
    setTodoData((prev) => [...prev, newTodo]);
    localStorage.setItem('todoData', JSON.stringify([...todoData, newTodo]));
    setValue("");
    setCost("");
  }

  const handleRemoveClick = () => {
    setTodoData([]);
    localStorage.setItem('todoData', JSON.stringify([]));

  }

  return (
      <div className={"flex items-center justify-center w-screen h-screen bg-blue-100"}>
        <div className={"w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg"}>
          <div className={"flex justify-between mb-3"}>
            <h1 className={"border-amber-200"}>예산 계산기</h1>
            <button onClick={handleRemoveClick}>Delete All</button>
          </div>
          <Lists todoData={todoData} setTodoData={setTodoData}/>
          <Form value={value} setValue={setValue} cost={cost} setCost={setCost} handleSubmit={handleSubmit}></Form>
        </div>

      </div>
  )
}