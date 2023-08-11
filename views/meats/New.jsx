import React from 'react'

export default function Index(props) {
  return (
    <div>
        <h1>Index</h1>
        {props.meats.map((meat,i) => <p><a href={`/meats/${i}`}key={i}>{meat.name}</a></p>)}
        <a href={`/vegetables`}><button>Vegetables</button></a>
        <a href={`/fruits`}><button>Fruits</button></a>
        <a href={`/meats/new`}><button>Add Meat</button></a>
    </div>
  )
}