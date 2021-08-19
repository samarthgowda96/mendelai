import {useEffect, useState} from 'react'
import axios from 'axios'
import Locations from './Locations'

const Users=()=>{
    const [users, setUsers]= useState([])
    //making get request to the API
    useEffect(()=>{
            async function getData(){
            const res= await axios.get('https://randomuser.me/api/?results=20')
            const data=res.data.results
            
            setUsers(data)
        }
        getData()
},[])

    return(
        <div>
            <h1 style={{color:"white"}}>Welcome To Users Information Database</h1>
            <h2 style={{color:"white"}}>Click Table Heading to Sort</h2>
            <Locations users={users}/>
        </div>
    )
}

export default Users;
