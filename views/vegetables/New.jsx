import React from 'react'

export default function New() {
  return (
    <div>
        <h1>New</h1>
        <form action='/vegetables' method='POST'>

            <label htmlFor="name">Name</label>
            <input type="text" id='name' name='name'></input>

            <label htmlFor="color">Color</label>
            <input type="text" id='color' name='color'></input>

            <label htmlFor="readyToEat">Ready To Eat:</label>
            <input type="checkbox" id='readyToEat' name='readyToEat'></input>

            <button>Submit</button>
        </form>
        <a href={`/vegetables`}><button>Back to list</button></a>
    </div>
  )
}