import React from 'react'

export default function Index({vegetables}) {

  return (
    <div>
        <h1>Index</h1>
        {vegetables.map((vegetable,i) => <p><a href={`/vegetables/${i}`}key={i}>{vegetable.name}</a></p>)}
        <a href={`/meats`}><button>Meats</button></a>
        <a href={`/fruits`}><button>Fruits</button></a>
        <a href={`/vegetables/new`}><button>Add Vegetable</button></a>
    </div>
  )
}