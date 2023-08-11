import React from 'react'

export default function Edit({ vegetable,index }) {
    let { name,color,readyToEat } = vegetable;
  return (
    <div>
        <h1>Edit</h1>
        <form action={`/vegetables/${index}?_method=PUT`} method='POST'>

            <label htmlFor="name">Name</label>
            <input type="text" id='name' name='name' value={name}></input>

            <label htmlFor="color">Color</label>
            <input type="text" id='color' name='color' value={color}></input>

            <label htmlFor="readyToEat">Ready To Eat:</label>
            <input type="checkbox" id='readyToEat' name='readyToEat' checked={readyToEat}></input>

            <button>Edit</button>
        </form>
        <a href={`/vegetables/${index}`}><button>Back to item</button></a>
        <a href={`/vegetables/`}><button>Back to list</button></a>
    </div>
  )
}