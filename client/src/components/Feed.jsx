import React, { useEffect, useState } from "react";

import client  from '../client'
import MasonryLayout from './MasonryLayout'
import Spinner from './Spinner'
import { useParams } from "react-router-dom";
import { feedQuery, searchQuery } from "../utils/data";

const Feed=()=>{

    const [loading, setLoading]=useState(false)
    const [pins, setPins]=useState(null)

    const {categoryId}=useParams()

    console.log(pins,"pinssssss");

    useEffect(()=>{
   setLoading(true)
        if (categoryId) {
            const query=searchQuery(categoryId)
            client.fetch(query)
            .then((data)=>{
                setPins(data)
                setLoading(false)
            })
        }else{
            client.fetch(feedQuery)
              .then((data)=>{
                setPins(data)
                setLoading(false)
              })
        }

    },[categoryId])

    if (loading) return <Spinner message="We are adding new ideas to Your feed! "/>

    if (!pins?.length) return <h3>No Pins</h3> 
   
    return (
        <>
    <div>
        {pins && <MasonryLayout pins={pins}/>}
    </div>
        </>
    )
}

export default Feed