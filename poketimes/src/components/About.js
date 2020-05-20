import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About=()=>{
    return(
        <div className="container">
           <h4 className="center">About</h4>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ex aliquid quam eum, nemo harum distinctio voluptatem doloribus explicabo, tempore mollitia fugiat dignissimos laborum fuga necessitatibus possimus dolorem, quod earum.</p>
        </div>
    )
}

export default Rainbow(About)