import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { getAllPosts } from '../graphql/Query';

function GetPost(){

    const {error, loading, data} = useQuery(getAllPosts);

    useEffect(()=>{
        console.log(data);
    },[data])

    return (
        <div>

        </div>
    );

}

export default GetPost;