import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useFetch from './usefetch';

const Blogdetails = (props) => {
    // useparams is a hook which is used to take the route paramaters form the route.
    const { id } = useParams();
    const [blog , ispending ,err ] = useFetch("http://localhost:5000/blogs/" + id);
    const history = useHistory();

    var handledelete = ()=>{
        fetch("http://localhost:5000/blogs/" + blog.id,{
            method:"DELETE"
        }).then(()=>{
            history.push("/");
        })
    }
    return (
        <div className='blog-details'>
            {err && <div>Could not fetch the data from the server </div>}
            { ispending && <img src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952kwfxo4r4rnyhikmirqdemf0r6cxltx7fnntvilnn&ep=v1_gifs_search&rid=200w.gif&ct=g" alt="" />}
            { blog && (
                <div>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <p className='blog-body'>{ blog.body }</p>
                    <button onClick={handledelete}>Delete Blog</button>
                </div>
            )}
        </div>
    );
}

export default Blogdetails;
