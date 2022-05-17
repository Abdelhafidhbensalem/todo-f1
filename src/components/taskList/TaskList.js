import React from 'react'
import Task from '../task/Task'

const TaskList = ({tasks,handleDone}) => {
  return (
    <div>
        {tasks.map(el=><Task key={el.id} el={el} handleDone={handleDone}/>)}
    </div>
  )
}

export default TaskList