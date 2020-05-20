import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'

class Home extends Component{
    state={
        posts:[]
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
           //we get all data from the json page
            console.log(res)
            this.setState({
                //we assign first 10 results to posts
                posts: res.data.slice(0,10)
            })
        })
    }  

    render(){
        const { posts }=this.state;
        const postList=posts.length ? (
            posts.map(post=>{
                return(
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="A Pokeball"/>
                        <div className="card-content">
                        <Link to={'/'+post.id}>
                          <span className="card-title red-text">
                             {post.title} 
                          </span> 
                        </Link>
                          <p>{post.body}</p> 
                        </div>   
                    </div>
                )
            })
        ):(
            <div className="center">No posts yet</div>
        )

        return(
            <div className="container home">
            <h4 className="center">Home</h4>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis pariatur mollitia repellat facere exercitationem quisquam nisi sunt nam modi quo soluta, nihil culpa ipsa nulla dolorem? Omnis, facere illum!</p> */}
            {postList}
            </div>
        )
    }    
}

export default Home