import React from 'react'

export const Pagination = ({lastpage,currentpage,page,handleChange}) => {
    const arr = new Array(lastpage).fill(0)
  return (
    <div>
    {arr.map(e=>{
        return (
          <button
            key={page}
            disabled={page + 1 === currentpage}
            onClick={() => handleChange(page + 1)}
          >
            {page + 1}
          </button>
        );
    })}
    </div>
  )
}
