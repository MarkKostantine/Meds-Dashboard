import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
const CatDetail = () => {
    const params=useParams()
    const id =params.id;
    const [cat,setCat]=useState(
        {name:"headache medicine",desc:"lorem ipsum"}
    )
  return (
    <div style={{
        width:"65%",
        margin:"20px auto",
        padding:"8px"
    }}>
        <h3>{cat.name}</h3>
        <h5>discription : {cat.desc}</h5>
    </div>
  )
}

export default CatDetail