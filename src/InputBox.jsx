import React,{useState} from 'react'

export default function InputBox() {
  const [query, setQuery] = useState("")
  
  const handleSubmit = (event)=> {
    event.preventDefault()
    if(query){
      const googleSearch = `https://www.google.com/search?q=${encodeURIComponent(query)}`
      window.location.href = googleSearch
    }
  }

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
          <input value={query}type="text" placeholder='What would you like to search?' className='input-box'onChange={(event)=>{
            setQuery(event.target.value)
          }} /> <br />
          <button className='btn' type='submit' onClick={handleSubmit}>Search</button>
          
        </form>
    </div>
  )
}
