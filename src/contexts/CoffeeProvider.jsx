import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { CoffeeContext } from './CoffeeContext'



function CoffeeProvider({children}) {
    const [coffees,setCoffees]=useState([])
    useEffect(()=>{
        fetch('http://localhost:2000/coffees')
        .then(res=>res.json())
        .then(data=>setCoffees(data))
    },[])
  return (
    <CoffeeContext value={coffees}>
       {children} 
    </CoffeeContext>
  )
}

export default CoffeeProvider