import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharCard from './Cards';

const PageContainer = props =>{

    const [names, setNames] = useState([]);

    useEffect(() =>{
        axios.get("https://swapi.co/api/people/").then(res =>{
            console.log(res.data.results)
            setNames(res.data.results)
        }).catch(error=>{
            console.log('the data was not returned', error)
        })
    }, [])

    return (
        <div className="container">
            <h2 className="header">Star Wars Characters</h2>
            <CharCard key={names} names={names}/>
        </div>
    )
}

export default PageContainer;