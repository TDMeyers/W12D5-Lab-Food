import React from 'react'

export default function Edit({ meat,index }) {
    let { name,state,readyToEat } = meat;
  return (
    <div>
        <h1>Edit</h1>
        <form action={`/meats/${index}?_method=PUT`} method='POST'>

            <label htmlFor="name">Name</label>
            <input type="text" id='name' name='name' value={name}></input>

            <label htmlFor="state">State</label>
            <input type="text" id='state' name='state' value={state}></input>

            <label htmlFor="readyToEat">Ready To Eat:</label>
            <input type="checkbox" id='readyToEat' name='readyToEat' checked={readyToEat}></input>

            <button>Edit</button>
        </form>
        <a href={`/meats/${index}`}><button>Back to item</button></a>
        <a href={`/meats/`}><button>Back to list</button></a>
    </div>
  )
}