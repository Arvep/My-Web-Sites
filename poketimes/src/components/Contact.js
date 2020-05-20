import React from 'react'

const Contact=(props)=>{
    //console.log(props)
    //props keeps track of our history
    //if we want to redirect the page after 2 secs:
    setTimeout(() =>{
        props.history.push('/about')
    },2000);
    
    return(
        <div className="container">
           <h4 className="center">Contact</h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fuga velit quisquam. Fugiat, veritatis esse adipisci nostrum minima voluptatibus ea et aliquam praesentium. Quae et tempore facilis officia dicta consequuntur?</p>
        </div>
    )
}

export default Contact