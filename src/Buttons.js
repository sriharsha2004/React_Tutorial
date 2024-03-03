import React from 'react';
import { useState } from 'react';

const Buttons = () => {
    var handleclick = ()=>{
        console.log("Clicked on buttton");
    }
    var m = (name)=>{
        console.log(name);
    }
    // var name = "nms";
    // var changeval = ()=>{
    //     name = "nlv"
    // }
    // above function is not going to change the value of name inside the compoennt it changes
    // only within the changename function
    // hence use useState hook as below
    var t = "random text";
    var [name , setName] = useState("nms");
    var [val,setval] = useState(1);
    var [text,settext] = useState(t);
    var changeval = () =>{
        if(name === "nms")
            setName("nlv");
        else 
            setName("nms");
        // this works insteard of above
    }
    var tog = ()=>{
        if(text === "random text"){
            settext("");
        }else{
            settext("random text");
        }
    }
    // Note : when ever we use setName /setval/... then automatiically th evalue set will be taken
    // as the default value from the next time i.e the value updated becomes Name/val
    // Obsever increment and deremcetn buttons to understand it
    var inc = ()=>{
        setval(val+1);
    }
    var dec = () =>{
        setval(val-1);
    }
    return (
        <div className='content'>
            <h2>All Blogs</h2>
            {/* we are having certain events */}
            {/* when we use below line to invoke the function then it will invoke 
            the function even before we click on the button hence we do not need to specify 
        paranthesis to invoke the function only after clicking the button */}
            {/* <button onClick={handleclick()}>Click Me</button> */}
        <button onClick={handleclick}>Click Me!!</button>
        {/* but incase if we wwwant to send aany arguments to the function then we need to 
        use parantheses , which will invoke the function even before called , to avaoid this we
        can use callback function and inside that we need to specify the cfunctions with
        arguments which we want to invoke. */}
        <button onClick={()=>{
            m("nms");
        }}>Click me to call method m with args</button>
        {/* when we preint name it prints nms irrespective of we change in the method or not */}
        {/* hence inorder to change the value , from the method and reflect inside the component
        we make use of useState hook */}
        {/* for useState hook we need to import it from the react and in the constructor of
        useState we need to specify its default value (name in our case) */}
        {/* this function returns an array , hence we gennrelly destructure the arrray and store
        the result into two elements in the array using square braces
        the first arg in the bracket represents the present value and the second value is
        a function which is used to set the value  */}
        {/* when ever we set the value automaticaallt the entire component will again be 
        rendered hence we can observe changes in the below div tag */}
        <div>{name}</div>
        <button onClick={changeval}>Change Name</button>
        {/* button click increment */}
        <div>See Changes here  :  {val}</div>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
        <div>Toggle switch the below text</div>
        <div>{ text }</div>
        <button onClick={tog}>Toggle Switch!!!</button>
        </div>
    );
}

export default Buttons;
