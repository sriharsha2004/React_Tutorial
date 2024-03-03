import React from 'react';
import { Link } from 'react-router-dom';

const Bloglist = (props) => {
    // props is a object which contains the data sent from other components , so to access
    // them we can use props.<name given in parent componnent for the data>

    var blogs = props.blogs;
    var title = props.title;
    var deleteblog = props.deleteblog;

    // we can directly use the destructuring insteard of using props parameter
    // Bloglist = ({ blogs , title }) => {}
    // In the above statement we are direclty destructurong the object. 

    // var filterblogs=(name)=>{
    //     var filter = blogs.filter((blog)=>{
    //         // dont forget to use return here as it expexts a return of boolean
    //         return blog.author === name;
    //     })
    //     return filter;
    // }
    return (
        <div className='blog-list'>
            <h2>{ title }</h2>
            {
                blogs.map((blog)=>(
                    <div className='blog-preview' key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{ blog.title }</h2>
                            <p>Written by { blog.author } </p>
                            {/* <button onClick={()=> deleteblog(blog.id)} >delete blog</button> */}
                        </Link>
                    </div>
                ))
            }
            {/* program to filter the blogs having name as mario */}
            {/* observe that when ever we write js we enclode in {} again inside it if we want
            to write html like div we have agian used () again to include js we included
            { } like blog.title below*/}
            {/* we caanot use multiple opretaions like filter annd map within the same
            curly brace hence we started another curly brace for the purpose of filter operation
            In this we used a useState hook so that when ever a new blog comes in 
            we can directly set the blog using setBlog fuonciton in the useState hook
            similarly if we removce a blog we wanna set the blog so that changes are easily 
            relected within the page without much effort */}
            {/* {
                filterblogs("mario").map((blog)=>(
                    <div className='blog-preview'>
                        <h2>{ blog.title }</h2>
                    </div>
                ))
            } */}
        </div>
    );
}

export default Bloglist;
