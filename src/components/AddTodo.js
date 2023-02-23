import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
	event.preventDefault()
    if (text === "") {
      alert("Can not be empty");
    }
    const newData = {
      id: String(new Date().getTime()),
      text: text,
      date: new Date(),
      isDone: false,
    };

	dispatch({type:"ADD_TODO", payload:newData})
	setText("")
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
