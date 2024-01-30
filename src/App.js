import React, {useState} from "react";
import "./App.css";

export default function App() {

    const [todoData, setTodoData] = useState([]);
    const [value, setValue] = useState("");

    const btnStyle = {
        color: "#fff",
        border: "none",
        padding: "5px 9px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "right"
    }

    const getStyle = (completed) => {
        return {
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: completed ? "line-through" : "none"
        }
    }
    const state = {
        todoData: [],
        value: ""
    }

    //삭제기능
    const handleClick = (id) => {
        let newTodoData = todoData.filter(data => data.id !== id);
        setTodoData(newTodoData)
    }

    const handleChange = (e) => {
        setTodoData(e.target.value)
    }

    //추가기능
    const handleSubmit = (e) => {
        e.preventDefault(); //페이지 리로드 방지

        let newTodo = {
            id: Date.now(),
            title: value,
            completed: false
        }
        //원래 할일 + 새로운 할일
        this.setState({todoData: [...todoData, newTodo], value: ""})
        setTodoData((prev) => [...prev, newTodo]);
        setValue("");
    }

    const handleCompleteChange = (id) => {
        let newTodoData = todoData.map(data => {
            if (data.id === id) {
                data.completed = !data.completed;
            }
            return data;
        })
        setTodoData(newTodoData)
    }

    return (
        <div className="container">
            <div className="todoBlock">
                <div className="title">
                    <h1>할 일 목록</h1>
                </div>

                {todoData.map(data => (
                    <div style={getStyle(data.completed)} key={data.id}>
                        <input type={"checkbox"} defaultChecked={false}
                               onChange={() => handleCompleteChange(data.id)}/>
                        {data.title}
                        <button style={btnStyle} onClick={() => handleClick(data.id)}>x</button>
                    </div>
                ))}

                <form style={{display: "flex"}} onSubmit={handleSubmit}>
                    <input
                        type={"text"}
                        name={"value"}
                        style={{flex: '10', padding: '5px'}}
                        placeholder={"해야 할 일을 입력해주세요."}
                        value={value}
                        onChange={handleChange}
                    />

                    <input
                        type={"submit"}
                        value={"입력"}
                        className={"btn"}
                        style={{flex: '1'}}
                    />
                </form>
            </div>

        </div>
    )
}