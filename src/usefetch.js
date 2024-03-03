import { useState , useEffect } from "react";

// defining a custom hook
// note : a ustom hook should always start with use keyworrd, otherwise it wont work
var useFetch = (url)=>{

    const ab = new AbortController();
    // to abort the fetch operation if required

    const [data,setdata] = useState(null);
    const [ispending,setispending] = useState(true);
    const [err,seterr] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            fetch(url , {signal : ab.signal })
            .then(res => {
                if(!res.ok){
                    setdata(null);
                    seterr(true);
                    setispending(false);
                    throw new Error("Could not fetch the data from server");
                }
                return res.json();
            })
            .then((data)=>{
                seterr(false)
                setispending(false);
                setdata(data);
            })
            .catch((err)=>{
                if(err.name == "AbortError"){
                    console.log("fetch Aborted");
                }else{
                    setispending(false);
                    seterr(true);
                }
            })
        },1000)

        return ()=>{ab.abort()}
        
    } , [url] )
    

    // In this we are using additional cleapup function which is required as 
    // the fetch will take same time to fetch the data frmo the server , by the time
    // if user renders some other compoent(say create) then after the data is fetched from 
    // the server it
    //tries to update the DOM(for home component)
    //  but the DOM is already changed to some other component(create)
    // So it retuerns an error cant update the unmounted component
    // So by using cleanup function we can abort the fetch operation when ever user navigates
    //to some other component quickly before dom getting updated


    return [data,ispending,err];
}

export default useFetch;