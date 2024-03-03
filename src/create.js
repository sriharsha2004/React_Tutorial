import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {

    const [title,settitle] = useState("");
    const [body,setbody] = useState("");
    const [author,setauthor] = useState("Mario")
    const [ispending,setispending] = useState(false);
    const history = useHistory();
    // useHistory() is a hook which is mainly used to naviagate among various routes present
    // inside the app
    // this history is named so , because it keeps track of the previos navigattions
    // history.go() is a method which takes us to a page based on our history either
    // forward or backward
    // eg : if we use history.go(-2) it indicates we will be redirected to a page which
    // is visited previosly twice before the present page , 
    // generally this history object does all these , by tracking the farward and backward 
    // buttons present in the browser
    // we can also use a method history.push(url) url->is the route where to naviate
    // note: in history.go we can also give ppositive numerbs, operation is same as the negative
    // number inside history.go function which is specified as above.

    var handleSubmit = (e)=>{
        e.preventDefault();
        var blog = { title , body , author }
        // This is js object , when we only give one parameter in each , then the key and the 
        // value are taken as the same
        // Note : We need not give any id for the object inside the json server,the json
        // by default assigns a key on its own we need not specify it explicitly

        setispending(true)

        // adding blog
        setTimeout(()=>{
            fetch("http://localhost:5000/blogs",{
                method:"POST",
                headers : {"Content-type" : "application/json"},
                body : JSON.stringify(blog)
            })
            .then(()=>{
                console.log("Blog added successfully");
                setispending(false)
                history.push("/");
            })
        } , 1000)
        // fetch method takes the second argument which is an object
        //  where we can add following arguments
        // method -> POST/GET
        // headers -> specifies the type of data which we are sending to the api
        // body ->specifies the data which we are sending to json server
        // we need to convert the data into string format , and send data

    }

    return (
        <div className='create'>
            <form onSubmit={handleSubmit} >
                <h2>Add a new Blog</h2>
                <label>Blog title : </label>
                <input type="text" required
                onChange={(e) => settitle(e.target.value)}
                />
                <label>Blog body</label>
                <textarea required onChange={(e)=> { setbody(e.target.value) }}></textarea>
                <label>Blog author : </label>
                <select onChange={(e) => {setauthor(e.target.value)}}>
                    <option>Mario</option>
                    <option>Yoshi</option>
                </select>
                { !ispending && <button>Add Blog</button>}
                { ispending && <button disabled>Adding blog ....</button> }
            </form>
            {/* onSubmit is the event , */}
            {/* observe that when ever the input field changes i am calling a anonymous 
            function in which i am setting the value of hook using settitle the value 
            will be available in e.target.value */}
        </div>
    );
}

export default Create;
