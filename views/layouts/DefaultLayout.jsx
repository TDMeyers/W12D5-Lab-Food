import React from 'react'

function DefaultLayout(props) {
    return (
        <html>
            <head>
                <link rel="stylesheet" href="/style.css" />
            </head>
            <body>
                <nav>
                    <a href='/fruits'><button>Fruits</button></a>
                    <a href='/meats'><button>Meats</button></a>
                    <a href='/vegetables'><button>Vegetables</button></a>
                </nav>
                {props.children}
            </body>
        </html>
    )
}

export default DefaultLayout