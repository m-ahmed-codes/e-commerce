import { useEffect, useState } from "react";


const useFetch = (resource,updateState) => {

    let [data,setData]=useState(null)
    let [error,setError]=useState(null)
    let [isPending,setIsPending]=useState(true)

    useEffect(()=>{
        fetch(resource)
        .then((response)=>{
            if(!response.ok){
                throw Error ("data is not loaded")
            }
            return response.json();
        })
        .then((data)=>{
            setData(data)
            setIsPending(false)
        })
        .catch((error)=>{
            setError(error.message)
            setIsPending(false)
        })

    },[resource,updateState])

    return ({isPending,data,error});
}
 
export default useFetch;