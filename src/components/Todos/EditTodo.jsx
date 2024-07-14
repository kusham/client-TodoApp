import React from 'react'
import TodoForm from './TodoForm'
import { ACTION_TYPES } from './Constants'
import { useLocation } from 'react-router-dom'

const EditTodo = () => {
  const location = useLocation();
  return (
    <div>
        <TodoForm type={ACTION_TYPES.EDIT} todoData={location.state} />
    </div>
  )
}

export default EditTodo