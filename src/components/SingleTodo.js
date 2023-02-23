import React from 'react';
import { useDispatch } from 'react-redux';

const SingleTodo = ({todo}) => {
	const dispatch = useDispatch()
	const deleteTodo=()=>{
		dispatch({type:"DELETE_TODO", payload:todo.id})
	}
  return (
	<div>
		<h3>{todo.text}</h3>
		<p>{new Date (todo.date).toLocaleString()}</p>
		<button onClick={()=>deleteTodo()}>Delete</button>
		<hr/>
		
	</div>
  )
}

export default SingleTodo