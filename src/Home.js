import React, { useState } from 'react';
import Bloglist from './bloglist';
import { useEffect } from 'react';
import useFetch from './usefetch';

const Home = () => {
    // var [blogs,setblogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
    // ]);
    // its better to initialize the blogs inside the useEffect hook as it gets at starting
    // always once

    // you the below approach to get data from an api 

    // const [blogs,setblogs] = useState(null);
    // const [ispending,setispending] = useState(true);
    // const [err,seterr] = useState(false);
    // defineig these hoooks inside the custom hook and import these hoooks from that useFetch
    // hook

    const [blogs,ispending,err] = useFetch("http://localhost:5000/blogs");
    // const{ data : blogs , ispending , err } = useFetch();
    // we can import it as above just like a normal useState or useEffect hook
    // or we can use object
    // const { data : blogs , ispending , err }  = useFetch();

    // generally here we are fetching the data from the json file in our local system which
    // takes less time , but in the real scenario , the data needs to be fetched from the 
    // database having huge amount of data which takes more time than usual .
    // So by the time the user gets  the data fetched the loading message needs to be shown
    // for that purpose we use an additional useState hook known as ispending hook.

    // var [name,setname] = useState("mario");

    // useEffect(()=>{
    //     console.log("Will execcute always when ever data is rendered");
    // })
    // the above useEffect hook will be executed every time rendering of a template takes place

    // if we what to execute functoin onnly at the starting of the render we use a dependecy
    // parameter (an array) as empty, if we wnat to execute the function only when 
    // a specific render takes place like blog or name we can specify it inside the square
    // breackets
    
    // useEffect(()=>{
    //     console.log("Executes only at the statring of render");
    // },[])

    // useEffect(()=>{
    //     console.log("Execute only when blogs are rendered");
    // },[blogs])

    // useEffect(()=>{
    //     console.log("Executed only when changed the name");
    // } , [name] )

    // In useEffect we used settimeout just to demonstrate the loading effect

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         fetch("http://localhost:5000/blogs")
    //         .then(res => {
    //             if(!res.ok){
    //                 setblogs(null);
    //                 seterr(true);
    //                 setispending(false);
    //                 throw new Error("Could not fetch the data from server");
    //             }
    //             return res.json();
    //         })
    //         .then((data)=>{
    //             seterr(false)
    //             setispending(false);
    //             setblogs(data);
    //         })
    //         .catch((err)=>{
    //             console.log(err.message);
    //         })
    //     },1000)
    // } , [] )

// the entire code which is written related to request the server , might encounter in several
// locations and we may need to do the same thing again and again , insteard we can
// create a custom hook , and assign this functionality to manage rest api's ,
// create a new js file for creating a custom hook , and import the custom hook here to use it


    // var deleteblog = (id)=>{
    //     var filterarr = blogs.filter((blog)=> blog.id!==id)
    //     setblogs(filterarr);
    // }

    return (
        <div className='content'>
            {/* below we are usning the props to send data to other components , for more details
             refer props.txt file*/}
             {err && <div>Could not fetch the data from the server </div>}
             { ispending && <img src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952kwfxo4r4rnyhikmirqdemf0r6cxltx7fnntvilnn&ep=v1_gifs_search&rid=200w.gif&ct=g" alt="" />}
             {blogs && <Bloglist blogs={blogs} title = "All Blogs!!" 
            //  deleteblog = {deleteblog}
             />}
             {/* In the above statemtn we are doing conditional templating where we are
             cheking if blogs is null or not , if not null then onky we are moving forward
             to send the blogs array as props to bloglist component */}


             {/* This line is to demonstrate the use of useEffect hook */}
             {/* <button onClick={ () => setname("yoshi") }>Change Name</button>          */}

             {/* here we can give any name of data which we want to send and the same name
             should be used in othr components to access the data */}
             {/* In the above case we are passing two parametrs to bloglist component 
             these two parameters will act as a key paramneter in the props object in other 
             componets */}
             {/* these props help us to implement reusability
             for example if we want to print all the blogs with author mario we can use below
             statement */}
             {/* <Bloglist blogs = { blogs.filter((blog)=> {return blog.author === "mario"})} title = "Mario's Blogs"/> */}
             {/* filtering blogs with name "mario" */}
             {/* See how we are making the use of reusability */}
        </div>
    );
}

export default Home;
