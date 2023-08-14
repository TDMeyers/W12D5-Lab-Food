import React from 'react'

function Index(props) {
    return (
        <DefaultLayout title='Index View'>
        <div>
            <h1>Index</h1>
            {props.fruits.map((fruit) =>
                <a href={`/fruits/${fruit._id}`}><p key={fruit._id}>{fruit.name}</p></a>
            )}
            <a href={`/fruits/new`}><button>Add Fruit</button></a>

            <form action={`/fruits/seed`} method='POST'>
                <button>SEED</button>
            </form>
            <br /><br />
            <form action={`/fruits/clear?_method=DELETE`} method='POST'>
                <button>CLEAR</button>
            </form>
            <br /><br />
            <a href={`/vegetables`}><button>Vegetables</button></a>
            <a href={`/meats`}><button>Meats</button></a>

        </div>
        </DefaultLayout>
    )
}

export default Index;