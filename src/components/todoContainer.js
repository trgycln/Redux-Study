import React from "react";
import { useSelector } from "react-redux";
import SingleTodo from "./SingleTodo";

const TodoContainer = () => {
  const storeState = useSelector((state) => state);
  console.log(storeState);

  return (
	<div>
		{
			storeState.todosState.length===0 ? (<p>There is no todo yet.</p>) :
			 (<>
			 {
				storeState.todosState.map((item,index)=>(
					<SingleTodo key={index} todo={item}/>
				))
			 }
			 </>)
		}
	</div>
  )
};

export default TodoContainer;
