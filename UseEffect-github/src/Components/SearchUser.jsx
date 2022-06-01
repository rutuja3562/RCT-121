import React, { useState } from 'react'

export const SearchUser = ({handleSearch}) => {
    // const [query,setQuery] =useState("");
    const [text ,setText] = useState("")
  return (
    <div>
    <input placeholder="Enter Username" value={text} onChange={(e)=>{setText(e.target.value)}}/>
    <button onClick={()=>handleSearch(text)}>SEARCH</button>
    </div>
  )
}
