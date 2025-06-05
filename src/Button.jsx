import React from 'react'

export default function Button() {

    const handleSubmit = (event)=> {
    event.preventDefault()
    if(query){
      const googleSearch = `https://www.google.com/search?q=${encodeURIComponent(query)}`
      window.location.href = googleSearch
    }
  }

  return (
    <div>
      <button  type='submit' className='btn' onClick={handleSubmit}>Search</button>
    </div>
  )
}
