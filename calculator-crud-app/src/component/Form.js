import React, { useState, useEffect } from 'react'
export default function Form({handleSubmit, value, setValue, cost, setCost}) {
    const [todoData, setTodoData] = useState(JSON.parse(localStorage.getItem('todoData')) || []);  // localStorage에서 todoData를 불러옴

    const handleChange = (e) => {
        if(e.target.name === "value") {
            setValue(e.target.value);
        } else if(e.target.name === "cost") {
            if (isNaN(e.target.value)){
                alert("비용에는 숫자만 입력해주세요.")
                return
            }
            setCost(e.target.value);
        }
    }
    const handleInput = (e) => {
        e.preventDefault();
        if (isNaN(cost)) {
            alert('비용에는 숫자만 입력해주세요.');
            return;
        }
        // cost가 숫자라면, 이후의 todo 추가 로직을 실행
        // ...
    }

    const calculateTotalCost = () => {
        return todoData.reduce((totalCost, item) => totalCost + Number(item.cost), 0);
    }


    useEffect(() => {  // localStorage의 todoData가 변경되면 해당 데이터를 불러옴
        setTodoData(JSON.parse(localStorage.getItem('todoData')) || []);
    }, [localStorage.getItem('todoData')]);



    return (
        <div>
            <form onSubmit={handleSubmit} className={"flex pt-2"}>
                <input
                    type={"text"}
                    name={"value"}
                    placeholder={"지출 항목"}
                    className={"w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"}
                    value={value}
                    onChange={handleChange}
                />

                <input
                    type={"text"}
                    name={"cost"}
                    placeholder={"비용"}
                    className={"w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"}
                    value={cost}
                    onChange={handleChange}
                />

                <input
                    className={"p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"}
                    type={"submit"}
                    value={"입력"}
                />
            </form>
            <br/>
            <p className={"text-2xl"}>총 지출: {calculateTotalCost()}원</p>
        </div>
    )
}