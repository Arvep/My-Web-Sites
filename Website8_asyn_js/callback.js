//Object
const posts=[
    {title: 'Post One', body:'This is post one'},
    {title: 'Post Two', body:'This is post two'}
   
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post,index) => {
            output+= `<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000); 
    //so after a second it loads the two posts
}

function createPost(post, callback) { 
     setTimeout(() => {
        posts.push(post);
        callback();
        },2000); //waits 2 sec before calling the callback
}



createPost({ title: 'Post Three',
body:'This is post three'},getPosts);
  