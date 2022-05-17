import React from 'react'
import "./task.css"
const Task = ({ el,handleDone }) => {
    console.log(el.desc)
    return (
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
            <h1 style={{margin:0}} className={el.isDone?'doneClass':'undoneClass'}>{el.desc}</h1>
            <div>
                <button onClick={()=>handleDone(el.id)}>{el.isDone?"done":"undone"}</button>
                <button>edit</button>
                <button>x</button>
            </div>
        </div>
    )
}

export default Task